import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClassesService } from 'src/app/services/api/classes.service';
import { ExercisesService } from 'src/app/services/api/exercises.service';
import { LanguagesService } from 'src/app/services/api/languages.service';

@Component({
  selector: 'app-register-exercises',
  templateUrl: './register-exercises.page.html',
  styleUrls: ['./register-exercises.page.scss'],
})
export class RegisterExercisesPage implements OnInit {

  private languages;
  private classes;
  private msg: string;

  constructor(
    private router : Router,
    private langService: LanguagesService,
    private classService: ClassesService,
    private exerService: ExercisesService,
    public toastActive: ToastController
  ) { }

  //Toast Create
  async showToast() {
    const toast = await this.toastActive.create({
      message: `${this.msg}`,
      duration: 3000
    });
    toast.present();
  }

  ngOnInit() {
    this.langService.getAll().subscribe(response => {
      this.languages = response;
    })
  }

  goToDash() {
    this.router.navigate(['home-administer']);
  }

  fetchClasses(event) {
    this.classService.getClasses(event.target.value).subscribe(response => {
      if(response[0].id_conteudo) {
        this.classes = response;
      }
    })
  }

  newExercise(form: NgForm) {
    const data = form.value;

    this.exerService.postExercise(data).subscribe(response => {
      if(response['return'] == 'true') {
        this.msg = response['status'];
        this.showToast();
        this.router.navigate(['home-administer']);
      } else {
        this.msg = response['status'];
        this.showToast();
      }
    })
  }

}

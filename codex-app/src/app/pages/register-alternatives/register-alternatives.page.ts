import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlternativesService } from 'src/app/services/api/alternatives.service';
import { ClassesService } from 'src/app/services/api/classes.service';
import { ExercisesService } from 'src/app/services/api/exercises.service';
import { LanguagesService } from 'src/app/services/api/languages.service';

@Component({
  selector: 'app-register-alternatives',
  templateUrl: './register-alternatives.page.html',
  styleUrls: ['./register-alternatives.page.scss'],
})
export class RegisterAlternativesPage implements OnInit {

  private languages;
  private classes;
  private exercises;
  private msg: string;

  constructor(
    private router: Router,
    private alterService: AlternativesService,
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
      this.languages = response
    });
  }

  goToDash(){
    this.router.navigate(['home-administer']);
  }

  fetchClasses(event) {
    this.classService.getClasses(event.target.value).subscribe(response => {
      this.classes = response;
    })
  }

  fetchExercises(event) {
    this.exerService.getExercisesFromClass(event.target.value).subscribe(response => {
      this.exercises = response;
    })
  }

  newAlternative(form : NgForm) {
    const data = form.value;

    this.alterService.postAlternative(data).subscribe(response => {
      if (response['return'] != 'true') {
        this.msg = response ['status'];
        this.showToast();
      } else {
        this.msg = response ['status'];
        this.showToast();
        this.router.navigate(['home-administer']);
      }
    })

  }

}

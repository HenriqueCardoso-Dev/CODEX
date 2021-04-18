import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClassesService } from 'src/app/services/api/classes.service';
import { LanguagesService } from 'src/app/services/api/languages.service';

@Component({
  selector: 'app-register-classes',
  templateUrl: './register-classes.page.html',
  styleUrls: ['./register-classes.page.scss'],
})
export class RegisterClassesPage implements OnInit {

  private languages;

  private msg :string;

  constructor(
    private router : Router,
    private langService: LanguagesService,
    private classService : ClassesService,
    public toastActive : ToastController

  ){

  }

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
      if (response[0].nome) {
        this.languages = response;
      }
    })
  }

  goToDash() {
    this.router.navigate(['home-administer']);
  }

  registerClasses(form: NgForm){
    const data = form.value;

    this.classService.postClass(data).subscribe(response => {
      
      if (response['return'] == 'true') {
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

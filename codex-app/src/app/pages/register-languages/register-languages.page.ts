import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LanguagesService } from 'src/app/services/api/languages.service';

@Component({
  selector: 'app-register-languages',
  templateUrl: './register-languages.page.html',
  styleUrls: ['./register-languages.page.scss'],
})
export class RegisterLanguagesPage implements OnInit {

  public msg: string;

  constructor(
    private router : Router,
    private langService: LanguagesService,
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
  }

  goToDash() {
    this.router.navigate(['home-administer']);
  }

  langRegister(form: NgForm){

    const data = form.value;
    
    this.langService.postLanguage(data).subscribe(response => {


      console.log(response);
    
      if (response['id_linguagem']) {
  
        this.msg = 'Linguagem cadastrada com sucesso!';
        this.showToast();
        this.router.navigate(['home-administer']);
  
      }else{
  
        this.msg = response['status'];
        this.showToast();
  
      }
    });
  
  }




}

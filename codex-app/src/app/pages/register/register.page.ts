import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private usernameValue: string;
  private emailUserValue: string;
  private passwordUserValue: string;

  private msg: string;

  constructor(private route:Router, public toastActive:ToastController) { }

  async showToast() {
    const toast = await this.toastActive.create({
      message: `${this.msg}`,
      duration: 2000
    });
    toast.present();
  }


  goToLogin() {
    this.route.navigate(['login']);
  }

  checkDataRegister() {

    if (this.emailUserValue.length == 0 || this.passwordUserValue.length == 0 || this.usernameValue.length == 0) {

      this.msg = 'Algo está faltando, revise e tente novamente!';
      this.showToast();
      return false;

    } else {

      return true;

    }
  
  }

  registerNewUser() {

    if (this.checkDataRegister()) {

      //variable for tests
      let userData = {
        user: this.usernameValue,
        email: this.emailUserValue,
        pass: this.passwordUserValue
      }

      //test output
      console.log(userData)

    }

  }

  ngOnInit() {
  }

}

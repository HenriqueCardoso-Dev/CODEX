import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/api/user.service';

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

  constructor (
    private route:Router, 
    public toastActive:ToastController,
    private modalCtrl: ModalController,
    private userService: UserService
  ) { }

  async showToast() {
    const toast = await this.toastActive.create({
      message: `${this.msg}`,
      duration: 3000
    });
    toast.present();
  }


  goToLogin() {
    this.modalCtrl.dismiss();
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

  registerNewUser(form: NgForm) {

    if (this.checkDataRegister()) {

      const data = form.value;

      this.userService.registerNewUser(data).subscribe(response => {
      
        if (response['id_usuario']) {
          this.msg = 'usuário cadastrado, agora faça o login para entrar';
          this.showToast();
        }
        this.modalCtrl.dismiss();
      
      });

    }

  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private identificator: string = "";
  private passwordValue: string = "";

  public msg: string;

  constructor(
    private route: Router, 
    public toastActive: ToastController, 
    private modalCtrl: ModalController,
    private userService: UserService
  ) {}


  //Toast Create
  async showToast() {
    const toast = await this.toastActive.create({
      message: `${this.msg}`,
      duration: 3000
    });
    toast.present();
  }


  //Acess Functions:

  checkCredentialsLength() {
    if (this.identificator.length == 0 || this.passwordValue.length == 0) {

      this.msg = 'Informe usuário e senha!';
      this.showToast();
      return false;

    } else {

      return true;

    }
  }

  LogIn() {

    if (this.checkCredentialsLength()) {

      this.userService.login(this.identificator, this.passwordValue).subscribe(response => {
        if (!response['id_usuario']) {
        
          this.msg = response['status'];
          this.showToast();
        
        } else {
          
          //Data encapsulation for screen migration
          let userAcess = {
            name: response['nome'],
            username: response['nick'],
            email: response['email'],
            password: this.passwordValue,
            id: response['id_usuario'],
            userType: response['tipo_usuario']
          }
          let navigationExtras: NavigationExtras = {
            queryParams: {
              special: JSON.stringify(userAcess)
            }
          }

          this.route.navigate(['home'], navigationExtras);
          this.msg = 'Usuário logado com sucesso';
          this.showToast();
        }
      });

      

    }

  }

  goToRegister() {
    this.modalCtrl.create({
      component: RegisterPage
    }).then(modal => modal.present());
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { otherLogin } from 'src/interfacesModels/otherLogin';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private userValue: string = "";
  private passwordValue: string = "";

  private loginOptions: otherLogin[];

  public msg: string;

  constructor(private route: Router, public toastActive: ToastController) {

    this.loginOptions = [
      {
        icon: "../../assets/images/logo-google-50px.png",
        text: "Entrar com o Google"
      },
      {
        icon: "../../assets/images/logo-facebook-50px.jpg",
        text: "Entrar com o Facebook"
      },
      {
        icon: "../../assets/images/logo-guest-50px.jpg",
        text: "Entrar como Convidado"
      }
    ];

  }


  //Toast Create
  async showToast() {
    const toast = await this.toastActive.create({
      message: `${this.msg}`,
      duration: 2000
    });
    toast.present();
  }


  //Acess Functions:

  checkCredentialsLength() {
    if (this.userValue.length == 0 || this.passwordValue.length == 0) {

      this.msg = 'Informe usuário e senha!';
      this.showToast();
      return false;

    } else {

      return true;

    }
  }

  LogIn() {

    if (this.checkCredentialsLength()) {

      //Data encapsulation for screen migration
      let userAcess = {
        username: this.userValue,
        password: this.passwordValue
      }
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(userAcess)
        }
      }

      //validating login
      if (this.userValue === "root" && this.passwordValue === "123") {
        this.route.navigate(['home'], navigationExtras);
        this.msg = 'Usuário logado com sucesso';
        this.showToast();
      } else {
        this.msg = 'Dados de usuário incorretos ou inexistentes';
        this.showToast();
      }

    }

  }


  LogInWithGoogle() {
    console.log("i'm here!")
  }

  goToRegister() {
    this.route.navigate(['register']);
  }

  ngOnInit() {
  }

}

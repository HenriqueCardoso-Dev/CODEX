import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserUpdatePage } from '../user-update/user-update.page';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.page.html',
  styleUrls: ['./user-perfil.page.scss'],
})
export class UserPerfilPage implements OnInit {

  private user : any;

  constructor(
    private router: Router, 
    private modalCtrl: ModalController,
    private recive : ActivatedRoute
  ) { 


    //recebendo dados do navigate;
    recive.queryParams.subscribe(params => {
      //convertendo dados JSON
      if(params && params.special) {
        let userData = JSON.parse(params.special);
        
        this.user = {
          id : userData.id,
          name: userData.name,
          email: userData.email,
          nick: userData.username
        }
      }
    });

  }

  

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToUpdate() {
    //encapsular para mandar para edição
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user)
      }
    }
    this.router.navigate(['user-update'], navigationExtras)
  }

}

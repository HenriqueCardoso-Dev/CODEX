import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserUpdatePage } from '../user-update/user-update.page';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.page.html',
  styleUrls: ['./user-perfil.page.scss'],
})
export class UserPerfilPage implements OnInit {

  private user : any;

  constructor(private router: Router, private modalCtrl: ModalController) { 
    this.user = {
      name: "'nome do usuário'",
      email: "'e-mail do usuário'",
    }
  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToUpdate() {
    this.modalCtrl.create({
      component: UserUpdatePage
    }).then(modal => modal.present());
  }

}

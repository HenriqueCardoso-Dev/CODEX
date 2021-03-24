import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.page.html',
  styleUrls: ['./user-perfil.page.scss'],
})
export class UserPerfilPage implements OnInit {

  private user : any;

  constructor(private router: Router) { 
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

}

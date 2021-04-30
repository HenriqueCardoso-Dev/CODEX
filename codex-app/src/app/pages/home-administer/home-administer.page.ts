import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home-administer',
  templateUrl: './home-administer.page.html',
  styleUrls: ['./home-administer.page.scss'],
})
export class HomeAdministerPage implements OnInit {

  private user;

  private navigationExtras: NavigationExtras;

  constructor(
    private router : Router,
    private recive : ActivatedRoute
  )
  { 
    recive.queryParams.subscribe(params => {

      if(params && params.special) {
        let userData = JSON.parse(params.special);
        this.user = {
          name: userData.name,
          username: userData.username,
          email: userData.email,
          password: userData.password,
          id: userData.id,
          userType: userData.userType
        }
        this.navigationExtras = {
          queryParams: {
            special: JSON.stringify(this.user)
          }
        }
      }
    })
  }

  ngOnInit() {
  }

  goToPerfil() {
    this.router.navigate(['user-perfil'], this.navigationExtras);
  }

  goToClassRegister() {
    this.router.navigate(['register-classes']);
  }

  goToLanguageRegister() {
    this.router.navigate(['register-languages']);
  }

  goToExerciseRegister() {
    this.router.navigate(['register-exercises']);
  }

  goToAlterRegister() {
    this.router.navigate(['register-alternatives']);
  }

}

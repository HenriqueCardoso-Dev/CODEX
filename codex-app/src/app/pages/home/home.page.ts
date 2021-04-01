import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { languageBoxContent } from 'src/interfacesModels/languageBoxContent';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: '';
  password: '';

  private languages: languageBoxContent[];

  private navigationExtras: NavigationExtras;

  constructor(
    private router : Router,
    private recive : ActivatedRoute
  ) { 

    //recebendo dados do navigate;
    recive.queryParams.subscribe(params => {
      //convertendo dados JSON
      if(params && params.special) {
        let userData = JSON.parse(params.special);
        this.username = userData.username;
        this.password = userData.password;

        //Data encapsulation for screen migration
        let userAcess = {
          name: userData.name,
          username: userData.username,
          email: userData.email,
          password: userData.password,
          id: userData.id,
          userType: userData.userType
        }
        this.navigationExtras = {
          queryParams: {
            special: JSON.stringify(userAcess)
          }
        }

      }

    });

    this.languages = [
      {name: 'HTML', qtdAulas: '10', image:'assets/images/languages/html/html.jpg', id: 1},
      {name: 'CSS', qtdAulas: '19', image:'assets/images/languages/css/css.jpg', id: 2},
      {name: 'JavaScript', qtdAulas: '9', image:'assets/images/languages/js/js.jpg', id: 3},
      {name: 'PHP', qtdAulas: '15', image:'assets/images/languages/php/php.jpg', id: 4}
    ];

  }

  goToClasses(language: number) {
    this.router.navigate(['classes']);
    
  }

  goToPerfil() {
    this.router.navigate(['user-perfil'], this.navigationExtras);
  }

  ngOnInit() {
  }

}

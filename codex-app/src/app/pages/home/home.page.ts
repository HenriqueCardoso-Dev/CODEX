import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { LanguagesService } from 'src/app/services/api/languages.service';
import { languageBoxContent } from 'src/interfacesModels/languageBoxContent';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: '';
  password: '';

  private languages;

  private navigationExtras: NavigationExtras;

  constructor(
    private router : Router,
    private recive : ActivatedRoute,
    private langService : LanguagesService
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

    

  }

  goToClasses(language: number) {
    this.router.navigate(['classes']);
    
  }

  goToPerfil() {
    this.router.navigate(['user-perfil'], this.navigationExtras);
  }

  ngOnInit() {
    this.langService.getAll().subscribe(response => {
    
      if(response[0].nome) {
        this.languages = response;
      }

    
    })
  }

}

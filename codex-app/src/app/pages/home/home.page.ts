import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { LanguagesService } from 'src/app/services/api/languages.service';

export type userType = {
  name: string,
  username: string,
  email: string,
  password: string,
  id: number,
  userType: number,
  userScore: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  private languages;

  private user: userType;

  private migration;

  private navigationExtras: NavigationExtras;

  constructor(
    private router : Router,
    private recive : ActivatedRoute,
    private langService : LanguagesService
  ) { 

    //recebendo dados do navigate;
    recive.queryParams.subscribe(params => {
      //convertendo dados JSON e encapsulando dados para migração de tela
      if(params && params.special) {
        let userData = JSON.parse(params.special);
        this.user = {
          name: userData.name,
          username: userData.username,
          email: userData.email,
          password: userData.password,
          id: userData.id,
          userType: userData.userType,
          userScore: userData.userScore
        }
        this.navigationExtras = {
          queryParams: {
            special: JSON.stringify(this.user)
          }
        }

      }

    });

  }

  goToClasses(language: any) {

    this.migration = {
      user: this.user,
      language: {
        id: language.id_linguagem,
        name: language.nome
      }
    }

    this.navigationExtras = {
      queryParams: {
        special: JSON.stringify(this.migration)
      }
    }

    this.router.navigate(['classes'], this.navigationExtras);
    
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

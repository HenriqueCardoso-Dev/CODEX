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

  constructor(private router : Router, private recive : ActivatedRoute) { 

    //recebendo dados do navigate;
    recive.queryParams.subscribe(params => {
      //convertendo dados JSON
      if(params && params.special) {
        let userData = JSON.parse(params.special);
        this.username = userData.username;
        this.password = userData.password;
      }
    });

    this.languages = [
      {name: 'HTML', qtdAulas: '10', image:'../../assets/images/language-icon-html.jpg'},
      {name: 'CSS', qtdAulas: '19', image:'../../assets/images/language-icon-css.jpg'},
      {name: 'JavaScript', qtdAulas: '9', image:'../../assets/images/language-icon-js.jpg'},
      {name: 'PHP', qtdAulas: '15', image:'../../assets/images/language-icon-php.jpg'},
    ];

  }

  ngOnInit() {
  }

}

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
      {name: 'HTML', qtdAulas: '10', image:'assets/images/languages/html/html.jpg', page: 'html-language'},
      {name: 'CSS', qtdAulas: '19', image:'assets/images/languages/css/css.jpg', page: 'css-language'},
      {name: 'JavaScript', qtdAulas: '9', image:'assets/images/languages/js/js.jpg', page: ''},
      {name: 'PHP', qtdAulas: '15', image:'assets/images/languages/php/php.jpg', page: ''}
    ];

  }

  goToExercisePage(page: string){
    this.router.navigate([page]);
    
  }

  ngOnInit() {
  }

}

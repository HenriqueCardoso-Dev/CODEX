import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: '';
  password: '';

  languages: any;

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
      {'name': 'HTML', 'qtdAulas': '10'},
      {'name': 'CSS', 'qtdAulas': '19'},
      {'name': 'JavaScript', 'qtdAulas': '9'}
    ];

  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exerciseBoxContent } from 'src/interfacesModels/exerciseBoxContent';

@Component({
  selector: 'app-css-language',
  templateUrl: './css-language.page.html',
  styleUrls: ['./css-language.page.scss'],
})
export class CssLanguagePage implements OnInit {

  private exercises: exerciseBoxContent[];

  constructor(private router: Router) {

    this.exercises = [
      {id: 1, name: 'Introdução', experience: '5' , image:'assets/images/languages/css/css-t.jpg'},
      {id: 2, name: 'Sintaxe', experience: '5', image:'assets/images/languages/css/css-t.jpg'},
      {id: 3, name: 'Sintaxe', experience: '7', image:'assets/images/languages/css/css-p.jpg'},
      {id: 4, name: 'Elementos', experience: '5', image:'assets/images/languages/css/css-t.jpg'}
    ];
  }

  goToBack(){
    this.router.navigate(["home"]);
  }

  ngOnInit() {
  }

}

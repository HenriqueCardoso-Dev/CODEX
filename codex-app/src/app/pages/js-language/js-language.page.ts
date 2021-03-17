import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exerciseBoxContent } from 'src/interfacesModels/exerciseBoxContent';

@Component({
  selector: 'app-js-language',
  templateUrl: './js-language.page.html',
  styleUrls: ['./js-language.page.scss'],
})
export class JsLanguagePage implements OnInit {

  private exercises: exerciseBoxContent[];

  constructor(private router: Router) {

    this.exercises = [
      {id: 1, name: 'Introdução', experience: '5' , image:'assets/images/languages/js/js-t.jpg'},
      {id: 2, name: 'Sintaxe', experience: '5', image:'assets/images/languages/js/js-t.jpg'},
      {id: 3, name: 'Sintaxe', experience: '7', image:'assets/images/languages/js/js-p.jpg'},
      {id: 4, name: 'Elementos', experience: '5', image:'assets/images/languages/js/js-t.jpg'}
    ];
  }

  goToBack(){
    this.router.navigate(["home"]);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exerciseBoxContent } from 'src/interfacesModels/exerciseBoxContent'

@Component({
  selector: 'app-php-language',
  templateUrl: './php-language.page.html',
  styleUrls: ['./php-language.page.scss'],
})
export class PhpLanguagePage implements OnInit {

  private exercises: exerciseBoxContent[];

  constructor(private router: Router) {

    this.exercises = [
      {id: 1, name: 'Introdução', experience: '5' , image:'assets/images/languages/php/php-t.jpg'},
      {id: 2, name: 'Sintaxe', experience: '5', image:'assets/images/languages/php/php-t.jpg'},
      {id: 3, name: 'Sintaxe', experience: '7', image:'assets/images/languages/php/php-p.jpg'},
      {id: 4, name: 'Elementos', experience: '5', image:'assets/images/languages/php/php-t.jpg'}
    ];
  }

  goToBack(){
    this.router.navigate(["home"]);
  }

  ngOnInit() {
  }

}

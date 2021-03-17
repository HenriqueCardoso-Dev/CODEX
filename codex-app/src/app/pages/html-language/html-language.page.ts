import { Component, OnInit } from '@angular/core';
import { exerciseBoxContent } from 'src/interfacesModels/exerciseBoxContent';

@Component({
  selector: 'app-html-language',
  templateUrl: './html-language.page.html',
  styleUrls: ['./html-language.page.scss'],
})
export class HtmlLanguagePage implements OnInit {

  private exercises: exerciseBoxContent[];

  constructor() {

    this.exercises = [
      {name: 'Introdução', experience: '5' , image:'assets/images/languages/html/html-t.jpg'},
      {name: 'Sintaxe', experience: '5', image:'assets/images/languages/html/html-t.jpg'},
      {name: 'Sintaxe', experience: '7', image:'assets/images/languages/html/html-p.jpg'},
      {name: 'Elementos Básicos', experience: '5', image:'assets/images/languages/html/html-t.jpg'}
    ];
  }

  ngOnInit() {
  }

}

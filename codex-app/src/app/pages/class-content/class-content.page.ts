import { classContentBox, describeClassContent,} from 'src/interfacesModels/classContentPage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-content',
  templateUrl: './class-content.page.html',
  styleUrls: ['./class-content.page.scss'],
})
export class ClassContentPage implements OnInit {

  private classesContent : classContentBox[];
  private describeClasses : describeClassContent[];

  constructor() { 
    this.describeClasses = [
      {describe: 'Seja Bem-Vindo a primeira aula de HTML. Na aula de hoje estaremos vendo uma introdução da linguagem e sua sintaxe.'}
    ]
    this.classesContent = [
      {id: 1, name:'Exercício 01', describe: 'Introdução a linguagem', image: 'assets/images/languages/html/html-t.jpg'},
      {id: 2, name:'Exercício 02', describe: 'Introdução a sintaxe', image: 'assets/images/languages/html/html-t.jpg'},
      {id: 3, name:'Exercício 03', describe: 'Revisão da aula', image: 'assets/images/languages/html/html-p.jpg'}
    ]
  }

  ngOnInit() {
  }

}

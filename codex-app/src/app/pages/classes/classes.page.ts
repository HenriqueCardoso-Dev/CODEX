import { Component, OnInit } from '@angular/core';
import { classBoxContent } from 'src/interfacesModels/classBoxContent';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {

  private classes : classBoxContent[];

  private languageId : number;

  constructor() { 
    this.classes = [
      {id: 1, name:'Aula 01', describe: 'Introdução a linguagem'},
      {id: 1, name:'Aula 02', describe: 'Introdução a linguagem'},
      {id: 1, name:'Aula 03', describe: 'Introdução a linguagem'},
      {id: 1, name:'Aula 04', describe: 'Introdução a linguagem'},
      {id: 1, name:'Aula 05', describe: 'Introdução a linguagem'}
    ]
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classBoxContent } from 'src/interfacesModels/classBoxContent';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {

  private classes : classBoxContent[];

  private languageId : number;

  private languageName: string;

  constructor(private router: Router) { 
    this.classes = [
      {id: 1, name:'Aula 01', describe: 'Introdução a linguagem'},
      {id: 2, name:'Aula 02', describe: 'Introdução a linguagem'},
      {id: 3, name:'Aula 03', describe: 'Introdução a linguagem'},
      {id: 4, name:'Aula 04', describe: 'Introdução a linguagem'},
      {id: 5, name:'Aula 05', describe: 'Introdução a linguagem'}
    ]
  }

  goToClassContent() {
    this.router.navigate(['class-content']);
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}

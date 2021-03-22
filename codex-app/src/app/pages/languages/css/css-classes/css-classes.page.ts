import { classBoxContent } from 'src/interfacesModels/classBoxContent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-classes',
  templateUrl: './css-classes.page.html',
  styleUrls: ['./css-classes.page.scss'],
})
export class CssClassesPage implements OnInit {

  public classes: classBoxContent[];

  constructor() { 

    this.classes = [
      {id:1, title:'Aula 1', describe:'Sintaxe do CSS'},
      {id:2, title:'Aula 2', describe:'Estilização do background'},
      {id:3, title:'Aula 3', describe:'Estilização da Table'}
    ];
  }

  ngOnInit() {
    //console.log(this.classes);
  }
}
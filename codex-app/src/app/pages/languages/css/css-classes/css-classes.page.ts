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
      {id:1, title:'Aula 1', describe:'Aprenda a sintaxe do CSS'}
    ];
  }

  ngOnInit() {
    //console.log(this.classes);
  }
}
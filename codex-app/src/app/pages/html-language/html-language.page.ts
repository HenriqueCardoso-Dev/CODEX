import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exerciseBoxContent } from 'src/interfacesModels/exerciseBoxContent';

@Component({
  selector: 'app-html-language',
  templateUrl: './html-language.page.html',
  styleUrls: ['./html-language.page.scss'],
})
export class HtmlLanguagePage implements OnInit {

  private exercises: exerciseBoxContent[];

  constructor(private router: Router) {

    this.exercises = [
      {id: 1, name: 'Introdução', experience: '5' , image:'assets/images/languages/html/html-t.jpg'},
      {id: 2, name: 'Sintaxe', experience: '5', image:'assets/images/languages/html/html-t.jpg'},
      {id: 3, name: 'Sintaxe', experience: '7', image:'assets/images/languages/html/html-p.jpg'},
      {id: 4, name: 'Elementos', experience: '5', image:'assets/images/languages/html/html-t.jpg'}
    ];
  }

  goToBack(){
    this.router.navigate(["home"]);
  }

  ngOnInit() {
  }

}

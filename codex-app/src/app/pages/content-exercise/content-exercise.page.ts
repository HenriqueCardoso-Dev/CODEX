import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-exercise',
  templateUrl: './content-exercise.page.html',
  styleUrls: ['./content-exercise.page.scss'],
})
export class ContentExercisePage implements OnInit {

  private enunciated = 'No exemplo de código acima o que está ocorrendo?';

  private beginCode = '<?php'

  private codeContent = [
    {line:'$nome = $_GET["nome"];'},
    {line:'$data = $_GET["data"];'},
    {line:'echo "$nome nasceu em $data";'}
  ];

  private endCode ='?>'

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.router.navigate(['class-content']);
  }

}

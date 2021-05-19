import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlternativesService } from 'src/app/services/api/alternatives.service';

@Component({
  selector: 'app-content-exercise',
  templateUrl: './content-exercise.page.html',
  styleUrls: ['./content-exercise.page.scss'],
})
export class ContentExercisePage implements OnInit {

  private exercise;
  private optionsText;

  private userData;

  constructor(
    private router: Router,
    private recive: ActivatedRoute,
    private alterService: AlternativesService
  ) {

    recive.queryParams.subscribe(params => {
      if(params && params.special) {
        let data = JSON.parse(params.special);

        this.exercise = data.exercise;
        this.userData = data.user;

        this.alterService.getAlternatives(data.exercise.id_exercicio).subscribe(response => {
          this.optionsText = response;
        })
        
      }
    })

  }

  ngOnInit() {
    
  }

  goToBack() {
    this.router.navigate(['class-content']);
  }

  getAnswer(form : NgForm) {
    const alternative = form.value;
    console.log(alternative);
  }

}

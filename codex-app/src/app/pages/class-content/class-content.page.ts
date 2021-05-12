import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ExercisesService } from 'src/app/services/api/exercises.service';

@Component({
  selector: 'app-class-content',
  templateUrl: './class-content.page.html',
  styleUrls: ['./class-content.page.scss'],
})
export class ClassContentPage implements OnInit {

  private exercises;
  private content;
  private userData;
  private errorMessage: string;
  private imageError: string;

  private navigationExtras: NavigationExtras;

  constructor(
    private router: Router,
    private recive: ActivatedRoute,
    private exerService: ExercisesService
  ) 
  {    

    recive.queryParams.subscribe(params => {
      if(params && params.special) {
        let recive = JSON.parse(params.special);

        this.userData = recive.user;
        this.exerService.getExercisesFromClass(recive.class.id_conteudo).subscribe(response => {
          if(response['length'] > 0) {
            this.exercises = response;
          } else {
            this.errorMessage = 'Nenhum exercício foi cadastrado para essa aula ainda!';
            this.imageError = '../../../assets/svgs/undraw_page_not_found_su7k.svg';
          }
        })



        this.content = {
          description: recive.class.ds_conteudo,
          title: recive.class.tt_conteudo
        }
      }
    })
  }

  goToClasses(){
    this.router.navigate(['classes']);
  }

  goToExercise(exerciseData : any) {
    let migration = {
      user: this.userData,
      exercise: exerciseData
    }

    this.navigationExtras = {
      queryParams: {
        special: JSON.stringify(migration)
      }
    }

    this.router.navigate(['content-exercise'], this.navigationExtras);
  }

  ngOnInit() {
  }

}

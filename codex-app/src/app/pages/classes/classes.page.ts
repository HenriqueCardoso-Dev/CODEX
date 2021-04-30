import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ClassesService } from 'src/app/services/api/classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {

  private classes;
  private langName: string;
  private errorMessage: string;
  private imageError: string;
  private imageHeader: string;

  private userData;

  private navigationExtras: NavigationExtras;

  constructor(
    private router: Router,
    private recive: ActivatedRoute,
    private clasService: ClassesService,
  )
  { 
    recive.queryParams.subscribe( params => {
      /* console.log(params) */
      if(params && params.special) {
        let data = JSON.parse(params.special);

        this.langName = data.language.name;
        this.userData = data.user;

        this.clasService.getClasses(data.language.id).subscribe(response => {
          
          if(response['length'] > 0) {
            this.classes = response;
            this.imageHeader = '../../../assets/svgs/dev-focus.svg';
          } else {
            this.errorMessage = 'Nenhuma Aula foi encontrada para essa linguagem!';
            this.imageError = '../../../assets/svgs/undraw_page_not_found_su7k.svg';
          }
          
        })
      }
    })

  }

  goToClassContent(classData: any) {

    let migration = {
      user: this.userData,
      class: classData
    }
    
    this.navigationExtras = {
      queryParams: {
        special: JSON.stringify(migration)
      }
    }

    this.router.navigate(['class-content'], this.navigationExtras);
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}

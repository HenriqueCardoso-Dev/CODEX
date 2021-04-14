import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguagesService } from 'src/app/services/api/languages.service';

@Component({
  selector: 'app-register-classes',
  templateUrl: './register-classes.page.html',
  styleUrls: ['./register-classes.page.scss'],
})
export class RegisterClassesPage implements OnInit {

  private languages;

  constructor(
    private router : Router,
    private langService: LanguagesService

  ){

  }

  ngOnInit() {
    this.langService.getAll().subscribe(response => {
      if (response[0].nome) {
        this.languages = response;
      }
    })
  }

  goToDash() {
    this.router.navigate(['home-administer']);
  }

  registerClasses(form: NgForm){
    const data = form.value;
  }
}

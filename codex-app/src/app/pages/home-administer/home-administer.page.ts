import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-administer',
  templateUrl: './home-administer.page.html',
  styleUrls: ['./home-administer.page.scss'],
})
export class HomeAdministerPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToClassRegister() {
    this.router.navigate(['register-classes']);
  }

  goToLanguageRegister() {
    this.router.navigate(['register-languages']);
  }

  goToExerciseRegister() {
    this.router.navigate(['register-exercises']);
  }

  goToAlterRegister() {
    this.router.navigate(['register-alternatives']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-exercises',
  templateUrl: './register-exercises.page.html',
  styleUrls: ['./register-exercises.page.scss'],
})
export class RegisterExercisesPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToDash() {
    this.router.navigate(['home-administer']);
  }

}

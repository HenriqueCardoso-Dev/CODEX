import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-classes',
  templateUrl: './register-classes.page.html',
  styleUrls: ['./register-classes.page.scss'],
})
export class RegisterClassesPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToDash() {
    this.router.navigate(['home-administer']);
  }
}

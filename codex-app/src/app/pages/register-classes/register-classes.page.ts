import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-classes',
  templateUrl: './register-classes.page.html',
  styleUrls: ['./register-classes.page.scss'],
})
export class RegisterClassesPage implements OnInit {

  private languages;

  constructor(
    private router : Router

  ){

  }

  ngOnInit() {
    this
  }

  goToDash() {
    this.router.navigate(['home-administer']);
  }

  registerClasses(form: NgForm){
    const data = form.value;
  }
}

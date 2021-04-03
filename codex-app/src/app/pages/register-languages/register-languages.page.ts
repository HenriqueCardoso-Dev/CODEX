import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-languages',
  templateUrl: './register-languages.page.html',
  styleUrls: ['./register-languages.page.scss'],
})
export class RegisterLanguagesPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToDash() {
    this.router.navigate(['home-administer']);
  }

}

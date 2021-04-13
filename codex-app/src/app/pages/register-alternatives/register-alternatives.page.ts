import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-alternatives',
  templateUrl: './register-alternatives.page.html',
  styleUrls: ['./register-alternatives.page.scss'],
})
export class RegisterAlternativesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDash(){
    this.router.navigate(['home-administer']);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.page.html',
  styleUrls: ['./user-update.page.scss'],
})
export class UserUpdatePage implements OnInit {

  private user : any;

  constructor(
    private router : Router,
    private recive : ActivatedRoute
  ) {
    //recebendo dados do navigate;
    recive.queryParams.subscribe(params => {
      //convertendo dados JSON
      if(params && params.special) {
        let userData = JSON.parse(params.special);
        
        this.user = {
          id : userData.id,
          name: userData.name,
          email: userData.email,
          nick: userData.nick
        }
      }
    });
  }

  ngOnInit() {
  }

  closeEdit() {
    this.router.navigate(['user-perfil']);
  }

  dataUpdate(form: NgForm) {
    const data = form.value;
    
    console.log(data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/interfacesModels/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user : user[];

  private url : string;

  private LoginUrl : string;

  private urlTest : string;



  constructor(private http: HttpClient) { 
    this.url = "http://localhost/CodexApi/user";

    this.LoginUrl = "http://localhost/CodexApi/login";

    this.urlTest = "http://localhost/CodexApi/score";
  }

  //função de GET para resgatar todos os usuários
  getAllUsers() {
    return this.http.get<[user]>(this.url);
  }

  getUser(id: number) {
    return this.http.get<[user]>(this.url + '/' + id);
  }

  login(identificator: any, pass: any) {
    return this.http.get(this.LoginUrl + '/' + identificator + '/' + pass);
  }

  registerNewUser(data: user) {
    return this.http.post(this.url, data);
  }

}

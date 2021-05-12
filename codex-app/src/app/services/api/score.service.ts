import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private url : string;

  constructor(
    private http:HttpClient
  ) {
    this.url = "http://localhost/CodexApi/score";
  }


  getUserScore(id : number) {
    return this.http.get(this.url +'/'+ id);
  }


}

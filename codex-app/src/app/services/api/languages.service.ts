import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private url: string;

  constructor(private http:HttpClient) { 
    this.url = "http://localhost/CodexApi/languages";
  }

  postLanguage(data){
    return this.http.post(this.url, data);
  }

  getAll() {
    return this.http.get(this.url);
  }
}

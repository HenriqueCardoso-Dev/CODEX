import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private url : string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost/CodexApi/languages";
  }

  getAllLanguages() {
    return this.http.get(this.url);
  }
}

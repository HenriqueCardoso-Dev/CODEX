import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlternativesService {

  private url: string;

  constructor(private http: HttpClient) {

    this.url = "http://localhost/CodexApi/alter/";

  }

  getAlternatives(id: number) {
    return this.http.get(this.url + id);
  }

  postAlternative(data : any) {
    return this.http.post(this.url, data);
  }
}

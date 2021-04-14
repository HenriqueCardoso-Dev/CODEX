import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private urlClasses: string;
  private urlContent: string;

  constructor(private http: HttpClient) {
    this.urlContent = "http://localhost/CodexApi/content";
    this.urlClasses = "http://localhost/CodexApi/classes";
  }

  getClasses(id: number){
    return this.http.get(this.urlClasses + "/" + id);
  }

  postClass(data: any){
    return this.http.post(this.urlContent, data);
  }

}

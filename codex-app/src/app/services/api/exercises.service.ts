import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private url: string; //for multiples execises

  private exerciseUrl: string; //for unique exercise

  constructor(
    private http: HttpClient
  ) {
    this.url = "http://localhost/CodexApi/exercises/";

    this.exerciseUrl = "http://localhost/CodexApi/exercise/";
  }

  getExercisesFromClass(id_aula: number) {
    return this.http.get(this.url + id_aula);
  }

  getUniqueExercise(id_exercise: number) {
    return this.http.get(this.exerciseUrl + id_exercise);
  }

  postExercise(data: any) {
    return this.http.post(this.exerciseUrl, data);
  }

}

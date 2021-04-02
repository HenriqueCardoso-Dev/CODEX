import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterExercisesPage } from './register-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterExercisesPageRoutingModule {}

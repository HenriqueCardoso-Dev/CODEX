import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAlternativesPage } from './register-alternatives.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterAlternativesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterAlternativesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterLanguagesPage } from './register-languages.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterLanguagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterLanguagesPageRoutingModule {}

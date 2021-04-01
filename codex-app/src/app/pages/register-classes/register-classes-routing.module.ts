import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterClassesPage } from './register-classes.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterClassesPageRoutingModule {}

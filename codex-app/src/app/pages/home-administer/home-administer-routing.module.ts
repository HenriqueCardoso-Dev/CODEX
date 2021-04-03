import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAdministerPage } from './home-administer.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAdministerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAdministerPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserUpdatePage } from './user-update.page';

const routes: Routes = [
  {
    path: '',
    component: UserUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserUpdatePageRoutingModule {}

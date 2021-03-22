import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPerfilPage } from './user-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: UserPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPerfilPageRoutingModule {}

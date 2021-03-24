import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassContentPage } from './class-content.page';

const routes: Routes = [
  {
    path: '',
    component: ClassContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassContentPageRoutingModule {}

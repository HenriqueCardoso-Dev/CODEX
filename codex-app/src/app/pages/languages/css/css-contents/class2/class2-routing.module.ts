import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Class2Page } from './class2.page';

const routes: Routes = [
  {
    path: '',
    component: Class2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Class2PageRoutingModule {}

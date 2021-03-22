import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Class1Page } from './class1.page';

const routes: Routes = [
  {
    path: '',
    component: Class1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Class1PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Class3Page } from './class3.page';

const routes: Routes = [
  {
    path: '',
    component: Class3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Class3PageRoutingModule {}

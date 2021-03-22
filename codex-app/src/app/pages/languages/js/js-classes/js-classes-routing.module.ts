import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsClassesPage } from './js-classes.page';

const routes: Routes = [
  {
    path: '',
    component: JsClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsClassesPageRoutingModule {}

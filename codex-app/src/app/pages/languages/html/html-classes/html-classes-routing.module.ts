import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlClassesPage } from './html-classes.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlClassesPageRoutingModule {}

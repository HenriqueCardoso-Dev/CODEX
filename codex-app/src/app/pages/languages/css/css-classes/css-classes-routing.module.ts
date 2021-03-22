import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssClassesPage } from './css-classes.page';

const routes: Routes = [
  {
    path: '',
    component: CssClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssClassesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhpClassesPage } from './php-classes.page';

const routes: Routes = [
  {
    path: '',
    component: PhpClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhpClassesPageRoutingModule {}

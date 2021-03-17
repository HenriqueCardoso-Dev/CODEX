import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhpLanguagePage } from './php-language.page';

const routes: Routes = [
  {
    path: '',
    component: PhpLanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhpLanguagePageRoutingModule {}

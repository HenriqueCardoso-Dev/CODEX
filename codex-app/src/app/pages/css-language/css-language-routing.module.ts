import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssLanguagePage } from './css-language.page';

const routes: Routes = [
  {
    path: '',
    component: CssLanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssLanguagePageRoutingModule {}

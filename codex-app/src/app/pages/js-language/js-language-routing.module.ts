import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsLanguagePage } from './js-language.page';

const routes: Routes = [
  {
    path: '',
    component: JsLanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsLanguagePageRoutingModule {}

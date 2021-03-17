import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlLanguagePage } from './html-language.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlLanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlLanguagePageRoutingModule {}

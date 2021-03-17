import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlLanguagePageRoutingModule } from './html-language-routing.module';

import { HtmlLanguagePage } from './html-language.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlLanguagePageRoutingModule
  ],
  declarations: [HtmlLanguagePage]
})
export class HtmlLanguagePageModule {}

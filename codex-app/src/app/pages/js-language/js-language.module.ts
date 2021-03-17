import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsLanguagePageRoutingModule } from './js-language-routing.module';

import { JsLanguagePage } from './js-language.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsLanguagePageRoutingModule
  ],
  declarations: [JsLanguagePage]
})
export class JsLanguagePageModule {}

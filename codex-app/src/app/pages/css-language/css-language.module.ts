import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssLanguagePageRoutingModule } from './css-language-routing.module';

import { CssLanguagePage } from './css-language.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssLanguagePageRoutingModule
  ],
  declarations: [CssLanguagePage]
})
export class CssLanguagePageModule {}

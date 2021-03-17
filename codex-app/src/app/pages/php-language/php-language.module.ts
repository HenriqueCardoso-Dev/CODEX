import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpLanguagePageRoutingModule } from './php-language-routing.module';

import { PhpLanguagePage } from './php-language.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpLanguagePageRoutingModule
  ],
  declarations: [PhpLanguagePage]
})
export class PhpLanguagePageModule {}

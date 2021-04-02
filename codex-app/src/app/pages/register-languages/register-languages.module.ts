import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterLanguagesPageRoutingModule } from './register-languages-routing.module';

import { RegisterLanguagesPage } from './register-languages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterLanguagesPageRoutingModule
  ],
  declarations: [RegisterLanguagesPage]
})
export class RegisterLanguagesPageModule {}

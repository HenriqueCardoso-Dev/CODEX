import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAlternativesPageRoutingModule } from './register-alternatives-routing.module';

import { RegisterAlternativesPage } from './register-alternatives.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAlternativesPageRoutingModule
  ],
  declarations: [RegisterAlternativesPage]
})
export class RegisterAlternativesPageModule {}

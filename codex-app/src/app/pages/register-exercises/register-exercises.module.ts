import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterExercisesPageRoutingModule } from './register-exercises-routing.module';

import { RegisterExercisesPage } from './register-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterExercisesPageRoutingModule
  ],
  declarations: [RegisterExercisesPage]
})
export class RegisterExercisesPageModule {}

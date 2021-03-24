import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentExercisePageRoutingModule } from './content-exercise-routing.module';

import { ContentExercisePage } from './content-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentExercisePageRoutingModule
  ],
  declarations: [ContentExercisePage]
})
export class ContentExercisePageModule {}

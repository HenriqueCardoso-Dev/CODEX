import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentExercisePage } from './content-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: ContentExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentExercisePageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssClassesPageRoutingModule } from './css-classes-routing.module';

import { CssClassesPage } from './css-classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssClassesPageRoutingModule
  ],
  declarations: [CssClassesPage]
})
export class CssClassesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsClassesPageRoutingModule } from './js-classes-routing.module';

import { JsClassesPage } from './js-classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsClassesPageRoutingModule
  ],
  declarations: [JsClassesPage]
})
export class JsClassesPageModule {}

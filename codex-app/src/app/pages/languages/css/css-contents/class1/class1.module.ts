import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Class1PageRoutingModule } from './class1-routing.module';

import { Class1Page } from './class1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Class1PageRoutingModule
  ],
  declarations: [Class1Page]
})
export class Class1PageModule {}

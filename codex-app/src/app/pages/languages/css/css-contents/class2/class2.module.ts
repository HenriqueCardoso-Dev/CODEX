import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Class2PageRoutingModule } from './class2-routing.module';

import { Class2Page } from './class2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Class2PageRoutingModule
  ],
  declarations: [Class2Page]
})
export class Class2PageModule {}

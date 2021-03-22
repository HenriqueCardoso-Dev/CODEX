import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Class3PageRoutingModule } from './class3-routing.module';

import { Class3Page } from './class3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Class3PageRoutingModule
  ],
  declarations: [Class3Page]
})
export class Class3PageModule {}

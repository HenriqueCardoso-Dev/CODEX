import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassContentPageRoutingModule } from './class-content-routing.module';

import { ClassContentPage } from './class-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassContentPageRoutingModule
  ],
  declarations: [ClassContentPage]
})
export class ClassContentPageModule {}

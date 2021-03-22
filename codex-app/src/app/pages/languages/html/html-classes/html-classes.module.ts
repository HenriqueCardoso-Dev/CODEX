import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlClassesPageRoutingModule } from './html-classes-routing.module';

import { HtmlClassesPage } from './html-classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlClassesPageRoutingModule
  ],
  declarations: [HtmlClassesPage]
})
export class HtmlClassesPageModule {}

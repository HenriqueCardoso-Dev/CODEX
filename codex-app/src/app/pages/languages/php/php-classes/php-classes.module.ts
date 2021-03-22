import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpClassesPageRoutingModule } from './php-classes-routing.module';

import { PhpClassesPage } from './php-classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpClassesPageRoutingModule
  ],
  declarations: [PhpClassesPage]
})
export class PhpClassesPageModule {}

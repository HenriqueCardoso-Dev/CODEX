import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterClassesPageRoutingModule } from './register-classes-routing.module';

import { RegisterClassesPage } from './register-classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterClassesPageRoutingModule
  ],
  declarations: [RegisterClassesPage]
})
export class RegisterClassesPageModule {}

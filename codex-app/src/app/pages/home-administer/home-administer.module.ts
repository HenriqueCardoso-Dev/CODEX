import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAdministerPageRoutingModule } from './home-administer-routing.module';

import { HomeAdministerPage } from './home-administer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAdministerPageRoutingModule
  ],
  declarations: [HomeAdministerPage]
})
export class HomeAdministerPageModule {}

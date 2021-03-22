import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPerfilPageRoutingModule } from './user-perfil-routing.module';

import { UserPerfilPage } from './user-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPerfilPageRoutingModule
  ],
  declarations: [UserPerfilPage]
})
export class UserPerfilPageModule {}

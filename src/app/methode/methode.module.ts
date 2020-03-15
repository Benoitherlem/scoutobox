import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MethodePageRoutingModule } from './methode-routing.module';

import { MethodePage } from './methode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MethodePageRoutingModule
  ],
  declarations: [MethodePage]
})
export class MethodePageModule {}

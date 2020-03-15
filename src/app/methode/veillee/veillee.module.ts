import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeilleePageRoutingModule } from './veillee-routing.module';

import { VeilleePage } from './veillee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeilleePageRoutingModule
  ],
  declarations: [VeilleePage]
})
export class VeilleePageModule {}

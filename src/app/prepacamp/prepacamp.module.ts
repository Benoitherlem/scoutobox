import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrepacampPageRoutingModule } from './prepacamp-routing.module';

import { PrepacampPage } from './prepacamp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrepacampPageRoutingModule
  ],
  declarations: [PrepacampPage]
})
export class PrepacampPageModule {}

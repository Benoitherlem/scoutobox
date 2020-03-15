import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrepacampdisplayPageRoutingModule } from './prepacampdisplay-routing.module';

import { PrepacampdisplayPage } from './prepacampdisplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrepacampdisplayPageRoutingModule
  ],
  declarations: [PrepacampdisplayPage]
})
export class PrepacampdisplayPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitedisplayPageRoutingModule } from './activitedisplay-routing.module';

import { ActivitedisplayPage } from './activitedisplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitedisplayPageRoutingModule
  ],
  declarations: [ActivitedisplayPage]
})
export class ActivitedisplayPageModule {}

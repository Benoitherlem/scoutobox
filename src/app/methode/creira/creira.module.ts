import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreiraPageRoutingModule } from './creira-routing.module';

import { CreiraPage } from './creira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreiraPageRoutingModule
  ],
  declarations: [CreiraPage]
})
export class CreiraPageModule {}

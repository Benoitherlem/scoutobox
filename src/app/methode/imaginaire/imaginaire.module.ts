import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImaginairePageRoutingModule } from './imaginaire-routing.module';

import { ImaginairePage } from './imaginaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImaginairePageRoutingModule
  ],
  declarations: [ImaginairePage]
})
export class ImaginairePageModule {}

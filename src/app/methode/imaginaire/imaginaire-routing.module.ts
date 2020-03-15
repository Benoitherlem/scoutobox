import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImaginairePage } from './imaginaire.page';

const routes: Routes = [
  {
    path: '',
    component: ImaginairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImaginairePageRoutingModule {}

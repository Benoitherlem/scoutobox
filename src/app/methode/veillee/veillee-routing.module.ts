import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeilleePage } from './veillee.page';

const routes: Routes = [
  {
    path: '',
    component: VeilleePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeilleePageRoutingModule {}

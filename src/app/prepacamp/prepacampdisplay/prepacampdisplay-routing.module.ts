import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrepacampdisplayPage } from './prepacampdisplay.page';

const routes: Routes = [
  {
    path: '',
    component: PrepacampdisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrepacampdisplayPageRoutingModule {}

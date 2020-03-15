import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreiraPage } from './creira.page';

const routes: Routes = [
  {
    path: '',
    component: CreiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreiraPageRoutingModule {}

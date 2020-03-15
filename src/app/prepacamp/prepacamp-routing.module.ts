import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrepacampPage } from './prepacamp.page';

const routes: Routes = [
  {
    path: '',
    component: PrepacampPage
  },
  {
    path: 'prepacampdisplay',
    loadChildren: () => import('./prepacampdisplay/prepacampdisplay.module').then( m => m.PrepacampdisplayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrepacampPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitePage } from './activite.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitePage
  },
  {
    path: 'activitedisplay',
    loadChildren: () => import('./activitedisplay/activitedisplay.module').then( m => m.ActivitedisplayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MethodePage } from './methode.page';

const routes: Routes = [
  {
    path: '',
    component: MethodePage
  },
  {
    path: 'creira',
    loadChildren: () => import('./creira/creira.module').then( m => m.CreiraPageModule)
  },
  {
    path: 'veillee',
    loadChildren: () => import('./veillee/veillee.module').then( m => m.VeilleePageModule)
  },
  {
    path: 'imaginaire',
    loadChildren: () => import('./imaginaire/imaginaire.module').then( m => m.ImaginairePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MethodePageRoutingModule {}

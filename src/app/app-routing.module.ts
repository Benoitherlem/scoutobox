import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'activite',     loadChildren: () => import('./activite/activite.module').then( m => m.ActivitePageModule) },
  { path: 'activitedisplay',     loadChildren: () => import('./activite/activitedisplay/activitedisplay.module').then( m => m.ActivitedisplayPageModule) },
  { path: 'evaluation',    loadChildren: () => import('./evaluation/evaluation.module').then( m => m.EvaluationPageModule)  },
  { path: 'information',    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)  },
  { path: 'qualification',    loadChildren: () => import('./qualification/qualification.module').then( m => m.QualificationPageModule)  },
  { path: 'methode',    loadChildren: () => import('./methode/methode.module').then( m => m.MethodePageModule)  },
  { path: 'creira',    loadChildren: () => import('./methode/creira/creira.module').then( m => m.CreiraPageModule)  },
  { path: 'imaginaire',    loadChildren: () => import('./methode/imaginaire/imaginaire.module').then( m => m.ImaginairePageModule)  },
  { path: 'veillee',    loadChildren: () => import('./methode/veillee/veillee.module').then( m => m.VeilleePageModule)  },
  { path: 'prepacamp',    loadChildren: () => import('./prepacamp/prepacamp.module').then( m => m.PrepacampPageModule)},
  { path: 'prepacampdisplay',    loadChildren: () => import('./prepacamp/prepacampdisplay/prepacampdisplay.module').then( m => m.PrepacampdisplayPageModule)},
  {
    path: 'preparation',
    loadChildren: () => import('./preparation/preparation.module').then( m => m.PreparationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

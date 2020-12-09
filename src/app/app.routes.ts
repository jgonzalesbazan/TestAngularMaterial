import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  {
      path: '',
      component: PagesComponent,
      // canActivate: [LoginGuard],
    //   loadChildren: './pages/pages.module#PagesModule'
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  // { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES2 = RouterModule.forRoot(appRoutes, {useHash: true});

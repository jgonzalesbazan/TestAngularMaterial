import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticulosComponent } from './articulos/articulos.component';

const pagesRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'article', component: ArticulosComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

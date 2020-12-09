import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { PAGES_ROUTES } from './pages.routes';
import { MatCardModule } from '@angular/material/card';
import { ArticulosComponent } from './articulos/articulos.component';

@NgModule({
  declarations: [
    HomeComponent,
    ArticulosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    PAGES_ROUTES
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprarProductosComponent } from './pages/comprar-productos/comprar-productos.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { ResultadoCompraComponent } from './pages/resultado-compra/resultado-compra.component';

const routes: Routes = [

  {
    path: '',
    component: ListadoProductosComponent,
    pathMatch: 'full'
  },

  {
    path: 'comprar-productos',
    component: ComprarProductosComponent
  },

  {
    path: 'resultado-compra',
    component: ResultadoCompraComponent
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
 
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "ignore",
      anchorScrolling:"enabled",
      scrollPositionRestoration: "top",
    }),
  ],

  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {};

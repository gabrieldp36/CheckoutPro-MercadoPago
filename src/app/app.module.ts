import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { ComprarProductosComponent } from './pages/comprar-productos/comprar-productos.component';

// Cambiar el locale de la app.
import localesAR from '@angular/common/locales/es-AR';
import {registerLocaleData} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { TarjetaProductoCompraComponent } from './components/tarjeta-producto-compra/tarjeta-producto-compra.component';

registerLocaleData(localesAR);

@NgModule({
  declarations: [
    AppComponent,
    ComprarProductosComponent,
    ListadoProductosComponent,
    NavBarComponent,
    CarritoComponent,
    TarjetaProductoComponent,
    TarjetaProductoCompraComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-AR'}],

  bootstrap: [AppComponent]
})
export class AppModule {};

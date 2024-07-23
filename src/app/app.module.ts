// Modulos
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Componentes.
import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ComprarProductosComponent } from './pages/comprar-productos/comprar-productos.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ResultadoCompraComponent } from './pages/resultado-compra/resultado-compra.component';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { TarjetaProductoCompraComponent } from './components/tarjeta-producto-compra/tarjeta-producto-compra.component';

// Cambiar el locale de la app.
import localesAR from '@angular/common/locales/es-AR';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localesAR);

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    ComprarProductosComponent,
    ListadoProductosComponent,
    NavBarComponent,
    ResultadoCompraComponent,
    TarjetaProductoComponent,
    TarjetaProductoCompraComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' },
    { provide: Window, useValue: window },
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule {};

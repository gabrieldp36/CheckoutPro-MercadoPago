import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/app.interfaces';
import { CarritoService } from 'src/app/services/carrito-service.service';

@Component({
  selector: 'app-tarjeta-producto-compra',
  templateUrl: './tarjeta-producto-compra.component.html',
  styleUrls: ['./tarjeta-producto-compra.component.css']
})
export class TarjetaProductoCompraComponent {

  @Input() producto!: Producto;
  public listadoProductos: Producto[] = this.carritoService.getCarritoProductos();

  constructor(
    private carritoService: CarritoService,
    private router: Router,
  ){};

  public eliminarCarrito(unProducto: Producto ):void {

    this.carritoService.removerProducto(unProducto)
    unProducto.stock++;

    if(this.listadoProductos.length === 0) {
      this.router.navigate(['']);
    };
  };
}

import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/app.interfaces';
import { CarritoService } from 'src/app/services/carrito-service.service';
import { SwalertService } from 'src/app/services/swalert.service';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent {

  @Input() producto!: Producto;

  constructor(
    private carritoService: CarritoService,
    private swalert: SwalertService
  ){};
  
  public agregarCarrito():void {
    this.carritoService.agregarProducto(this.producto)
    this.producto.stock--;
    this.swalert.crearToast('Producto agregado al carrito', 'success');
  };
}

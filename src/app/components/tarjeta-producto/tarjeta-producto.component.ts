import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/app.interfaces';
import { CarritoService } from 'src/app/services/carrito-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent {

  @Input() producto!: Producto;

  constructor(private carritoService: CarritoService){};
  
  public agregarCarrito():void {

    this.carritoService.agregarProducto(this.producto)

    this.producto.stock--;

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    
    Toast.fire({
      icon: "success",
      title: "Producto agregado al carrito."
    });
  };
}

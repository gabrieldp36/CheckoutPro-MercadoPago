import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/app.interfaces';
import { CarritoService } from 'src/app/services/carrito-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent {

  public listadoProductos: Producto[] = this.carritoService.getProductos();

  constructor(private carritoService: CarritoService){};
}

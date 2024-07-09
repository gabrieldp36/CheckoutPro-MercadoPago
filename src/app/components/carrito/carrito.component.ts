import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'src/app/interfaces/app.interfaces';
import { CarritoService } from 'src/app/services/carrito-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  public productosCarrito: Producto[] = this.carritoService.getCarritoProductos();
  public mostrarAvisoLleno: boolean = true;

  constructor(
    public carritoService: CarritoService,
    private router: Router
  ) {};


  public eliminarCarrito(unProducto: Producto ):void {

    this.carritoService.removerProducto(unProducto)
    unProducto.stock++;
    if(this.productosCarrito.length === 0) {
      this.router.navigate(['']);
    };
  };

  public ocultarAviso(){

    this.mostrarAvisoLleno = false;
  };

  public mostrarAviso(){ 

    this.mostrarAvisoLleno = true;
  };

  public comprarProductos(dropdown: NgbDropdown) {

    this.router.navigate(['/comprar-productos']);
    dropdown.close();
  };
}

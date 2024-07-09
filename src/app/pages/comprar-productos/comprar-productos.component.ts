import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/app.interfaces';
import { CarritoService } from 'src/app/services/carrito-service';

@Component({
  selector: 'app-comprar-productos',
  templateUrl: './comprar-productos.component.html',
  styleUrls: ['./comprar-productos.component.css']
})
export class ComprarProductosComponent {

  public listadoProductos: Producto[] = this.carritoService.getCarritoProductos();

  constructor(
    public carritoService: CarritoService,
    private router: Router,
  ){};

  public ngOnInit(): void {
    this.redireccionarListado();
  };

  public redireccionarListado(): void {
    if(this.listadoProductos.length === 0) {
      this.router.navigate(['']);
    };
  };
}

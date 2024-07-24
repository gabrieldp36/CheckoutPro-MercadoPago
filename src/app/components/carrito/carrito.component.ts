import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { Producto } from 'src/app/interfaces/app.interfaces';
import { CarritoService } from 'src/app/services/carrito-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @ViewChild('btnCarrito') btnCarrito!: ElementRef<HTMLDivElement>

  public productosCarrito: Producto[] = this.carritoService.getCarritoProductos();
  public mostrarAvisoLleno: boolean = true;
 
  constructor(
    public carritoService: CarritoService,
    public router: Router
  ) {};

  public ngOnInit(): void {
    this.deshabilitarCarrito();
  };

  public eliminarCarrito(unProducto: Producto, dropdown: NgbDropdown):void {

    this.carritoService.removerProducto(unProducto)
    unProducto.stock++;
   (this.carritoService.getCarritoProductos().length === 0) ? dropdown.close() : '';
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

  public deshabilitarCarrito() {

    this.router.events.pipe(
      filter( (event: any) => event instanceof NavigationEnd)
    ).subscribe( (event:any) => {
      if(event['url'] === '/comprar-productos' || event['url'] === '/resultado-compra') {
        this.btnCarrito.nativeElement.classList.add('hidden');
      } else {
        this.btnCarrito.nativeElement.classList.remove('hidden');
      };
    });
  };
}

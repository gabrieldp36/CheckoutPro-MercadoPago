import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/app.interfaces';
import { CarritoService } from 'src/app/services/carrito-service.service';
import { MercadoPagoService } from 'src/app/services/mercado-pago.service';

@Component({
  selector: 'app-comprar-productos',
  templateUrl: './comprar-productos.component.html',
  styleUrls: ['./comprar-productos.component.css']
})
export class ComprarProductosComponent {
  
  @ViewChild('divBtnMP') divBtnMP!: ElementRef<HTMLDivElement>;

  public productosCarrito: Producto[] = this.carritoService.getCarritoProductos();
 
  constructor(
    private router: Router,
    public mp: MercadoPagoService,
    public carritoService: CarritoService,
  ){};

  public ngOnInit(): void {
    this.init();
  };

  public init(): void {
    if(this.productosCarrito.length === 0) {
      this.router.navigate(['']);
    } else {
      this.crearPreferencia();
    };
  };

  public crearPreferencia(): void {
    if(this.productosCarrito.length > 0) {
      let preferencia = structuredClone(this.productosCarrito).map( p => {
        return {
          id: p.id,
          title: p.titulo,
          unit_price: p.precio,
          picture_url: p.imagenUrl,
          currency_id: 'ARS',
          description: p.descripcion,
          quantity: 1,
        }
      });
      this.mp.crearPreferencia({items: preferencia});
    };
  };

  public crearNuevaPreferencia(): void {
    document.querySelector('#wallet_container')?.remove();
    const divMP = document.createElement('div');
    divMP.id = 'wallet_container'
    this.divBtnMP.nativeElement.append(divMP)
    this.crearPreferencia();
  };
}

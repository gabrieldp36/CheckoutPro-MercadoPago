import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/app.interfaces';
import { CarritoService } from 'src/app/services/carrito-service.service';
import { SwalertService } from 'src/app/services/swalert.service';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() producto!: Producto;
  public imgLoad: boolean = true;

  constructor(
    private carritoService: CarritoService,
    private swalert: SwalertService
  ){};

  public ngOnInit(): void {
    this.verificarCargaImagen();
  };

  private verificarCargaImagen(): void {
    let img: HTMLImageElement|null = new Image();
    img.onload = () => { this.imgLoad = false; }
    img.src =this.producto.imagenUrl;
    (!this.imgLoad) ? img = null : '';
  };
  
  public agregarCarrito():void {
    this.carritoService.agregarProducto(this.producto)
    this.producto.stock--;
    this.swalert.crearToast('Producto agregado al carrito', 'success');
  };

  public onLoadImg(): void {
    this.imgLoad = true;
  };
}

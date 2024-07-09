import { Injectable } from '@angular/core';

import { Producto } from '../interfaces/app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private _carritoProductos: Producto[] = [];

  private _listadoProductos: Producto[] = [

    {
      id: 1,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_836230-MLA47745324960_102021-F.webp",
      titulo: "Yamaha Custom Z Ytr-8310zs",
      descripcion: "Trompeta profesional diseñada especialmente para músicos de jazz.",
      precio: 1200000,
      stock: 2
    },

    
    {
      id: 2,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_733768-MLA45822475776_052021-F.webp",
      titulo: "Vincent Bach Tr200 Si-b",
      descripcion: "Instrumento ideal para estudiantes principiantes.",
      precio: 500000,
      stock: 8
    },

    {
      id: 3,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_659183-MLA43346543240_092020-F.webp",
      titulo: "Vincent Bach Stradivarius Mod 43",
      descripcion: "Trompeta Stradivarius modelo 43 campana ultra liviana.",
      precio: 1800000,
      stock: 1
    },

    {
      id: 4,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_627746-MLA31193071789_062019-F.webp",
      titulo: "Getzen Eterna 900dlx",
      descripcion: "Diseñado para los profesionales que desean un instrumento con tonos maravillosamente ricos y brillantes",
      precio: 1200000,
      stock: 3
    },

    {
      id: 5,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_859424-MLA48952141431_012022-F.webp",
      titulo: "Vincent Bach Stradivarius 37",
      descripcion: "Trompeta vincent bach stradivarius 190s37 50th aniversario, año 2015 , estuche original.",
      precio: 1500000,
      stock: 1
    },
  ];


  public getCarritoProductos() {

    return this._carritoProductos;
  }

  public getProductos() {

    return this._listadoProductos;
  }

  constructor() {};

  public agregarProducto(unProducto: Producto):void {

    this._carritoProductos.push(unProducto);
  }

  public removerProducto(unProducto: Producto):void {

    let index: number = this._carritoProductos.indexOf(unProducto);

    this._carritoProductos.splice(index, 1);
  }

  public totalCarrito():number {

    let precioTotal: number = 0;

    this._carritoProductos.forEach( (producto) => {
      precioTotal += producto.precio;
    });

    return precioTotal;
  };
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { SwalertService } from './swalert.service';

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {

  private ventana: any;
  private publicKey: string = 'APP_USR-c144f221-2cb3-44e4-bde0-304ea3d7423e';
  private mercadoPago: any;

  public constructor(
    public http: HttpClient,
    private window: Window,
    private swalert: SwalertService,
  ) {
    this.ventana = this.window;
    this.initMercadoPago();
  };

  public initMercadoPago() {
    this.cargarMercadoPago();
  };

  public async cargarMercadoPago() {
    try {
      await loadMercadoPago();
        this.mercadoPago = new this.ventana['MercadoPago'](this.publicKey, {
        locale: 'es-AR',
        advancedFraudPrevention: true,
      });
    } catch (error) {
      console.log(error);
      this.swalert.dialogoSimple('error', 'Servicio inaccesible', 'El servicio de Mercado Pago se encuentra temporalmente inaccesible. Intente nuevamente más tarde.');
    }
  };

  public crearPreferencia(preferencia: any): void {
    this.http.post('http://localhost:4200/create_preference', preferencia)
    .subscribe({
      next: (resp: any) => {
        this.crearBotonMercadoPago(resp.id);
      },
      error: (error) => {
        console.log(error);
        this.swalert.dialogoSimple('error', 'Ha ocurrido un error', 'No se ha podido procesar la orden de pago.');
      },
    });
  };

  private crearBotonMercadoPago(preferenciaId: string) {
    const bricksBuilder = this.mercadoPago.bricks();
    this.renderizarBotonMP(bricksBuilder, preferenciaId);
  };

  private async renderizarBotonMP(bricksBuilder: any, preferenciaId: string) {
    if( this.ventana.checkoutButton ) this.ventana.checkoutButton?.unmount();
    try {
      await bricksBuilder.create('wallet', 'wallet_container',{
        initialization: {
          preferenceId: preferenciaId,
          redirectMode: 'self'
        },
        customization: {
          texts: {
           valueProp: 'smart_option',
          },
        },
      });
    } catch (error) {
      console.log(error)
      this.swalert.dialogoSimple('error', 'Servicio inaccesible', 'El servicio de Mercado Pago se encuentra temporalmente inaccesible. Intente nuevamente más tarde.');
    };
  };
}

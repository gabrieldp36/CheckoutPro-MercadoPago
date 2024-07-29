import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SwalertService } from 'src/app/services/swalert.service';

@Component({
  selector: 'app-resultado-compra',
  templateUrl: './resultado-compra.component.html',
  styleUrls: ['./resultado-compra.component.css']
})
export class ResultadoCompraComponent implements OnInit {

  public resutado: string = '';
  public actualizandoPago: boolean = false;
  public redireccionar: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private swalert: SwalertService
  ){};

  public ngOnInit(): void {
    this.capturarFeedbackMP();
  };

  public capturarFeedbackMP():void {
    this.activatedRoute.queryParams.subscribe( (queryParams) => {
      if(Object.keys(queryParams).length > 0) {
        this.redireccionar = false;
        this.actualizandoPago = true;
        this.swalert.crearLoading('¡Actualizando pago!');
        this.determinarResultado(queryParams);
        console.log(queryParams);
        this.router.navigate([], {queryParams:null});
      } else {
        if(this.redireccionar) {
          //this.router.navigate(['']);
          this.redireccionar = false;
          this.actualizandoPago = true;
          this.swalert.crearLoading('¡Actualizando pago!');
          this.determinarResultado(queryParams);
        };
      };
    });
  };

  public determinarResultado(queryParams: Params): void {
    //const estadoPago: string = queryParams['status'];
    const estadoPago: string = 'approved';
    switch (estadoPago) {
      case 'approved':
        this.resutado = 'exitoso'
        break;
      case 'pending':
        this.resutado = 'pendiente'
        break;
      case 'in_process':
        this.resutado = 'pendiente'
        break;
      default:
        this.resutado = 'cancelado'
        break;
    };
  };

  public onLoadImg(): void {
    setTimeout(() => {
      this.actualizandoPago = false;
      this.swalert.cerrarAlert();
    }, 800);
  };
}

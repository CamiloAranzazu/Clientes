import { Component, OnInit } from '@angular/core';
import { ClienteI } from '../interfaces/cliente';
import { ClienteService } from 'src/app/sevicios/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  cliente: any = {  };
  parametroEsperado: string;

  constructor(private clienteServicio: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) {

                this.activatedRoute.params
                .subscribe( parametros => {
                  this.parametroEsperado = parametros.id;
                  if (this.parametroEsperado !== 'nuevoCliente') {
                    this.clienteServicio.consultarIdClientes( this.parametroEsperado )
                    .subscribe( (clientes: ClienteI) => this.cliente = clientes);
                  }
              });

               }

  ngOnInit() {
  }

}

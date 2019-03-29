import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/sevicios/cliente.service';
import { ClienteI } from '../interfaces/cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  clientes: ClienteI;

  constructor( private clientesService: ClienteService) { }

  ngOnInit() {
    this.GetClientes();
  }

  GetClientes() {
    this.clientesService.consultarAllClientes()
      .subscribe( (data: ClienteI) => this.clientes = data);
  }

  EliminarCiente( id: string) {
    this.clientesService.eliminarCliente(id)
      .subscribe( res => {
        if (res) {
          console.log(res);
        } else {
          delete this.clientes[id];
        }
       });
  }

}

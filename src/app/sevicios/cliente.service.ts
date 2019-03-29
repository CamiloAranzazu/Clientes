import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  getClientes: string = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private httpCliente: HttpClient) { }

  consultarAllClientes() {
    return this.httpCliente.get(this.getClientes);
  }
  consultarIdClientes(id: string) {
    const url = `${this.getClientes}/${id}`;
    return this.httpCliente.get(url);
  }
  eliminarCliente(id: string) {
    const urlDelete = `${ this.getClientes }/${id}`;
    return this.httpCliente.delete(urlDelete);
  }
}

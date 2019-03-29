import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  // Metodo para ir a inicio (Lista de Clientes)
  Inicio() {
    this.router.navigate(['']);
  }
}

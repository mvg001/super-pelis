import { Component } from '@angular/core';
import { FilaPeliComponent } from "../fila-peli/fila-peli.component";
import { ServicioPelisService } from '../../services/servicio-pelis.service';
import { Peli } from '../../interfaces/peli';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contenedor',
    standalone: true,
    templateUrl: './contenedor.component.html',
    styleUrl: './contenedor.component.scss',
    imports: [FilaPeliComponent,CommonModule]
})
export class ContenedorComponent {
  listaPeliculas: Peli[];
  constructor(private servicioPelis: ServicioPelisService) {
    this.listaPeliculas = servicioPelis.pelis;
  }
}

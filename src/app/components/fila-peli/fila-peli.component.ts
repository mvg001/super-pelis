import { Component, Input } from '@angular/core';
import { Peli } from '../../interfaces/peli';
import { ServicioPelisService } from '../../services/servicio-pelis.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fila-peli',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fila-peli.component.html',
  styleUrl: './fila-peli.component.scss'
})
export class FilaPeliComponent {
  constructor (private servicioPelis:ServicioPelisService) {}
  borrarPeli(titulo: string) {
    this.servicioPelis.eliminarPeli(titulo);
  }
  @Input() pelicula!: Peli;
}

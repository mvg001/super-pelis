import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Peli } from '../../interfaces/peli';
import { ServicioPelisService } from '../../services/servicio-pelis.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})

export class FormularioComponent {
  pelicula: Peli = {title: "", image: "", year:0,};
  constructor(private servicioPelis: ServicioPelisService) {}
  agregarPelicula() {
    this.servicioPelis.agregarPeli({...this.pelicula});
  }

}

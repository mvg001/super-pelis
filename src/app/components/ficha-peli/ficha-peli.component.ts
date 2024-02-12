import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicioPelisService } from '../../services/servicio-pelis.service';
import { Peli } from '../../interfaces/peli';

@Component({
  selector: 'app-ficha-peli',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './ficha-peli.component.html',
  styleUrl: './ficha-peli.component.scss'
})
export class FichaPeliComponent {
  titulo: string = '';
  peli: Peli | undefined;
  constructor(private ar:ActivatedRoute, private svcPelis:ServicioPelisService) {
  }
  ngOnInit():void {
    this.ar.params.subscribe(params => {
      this.titulo = params['titulo'];
    });
    this.peli = this.svcPelis.buscarPeli(this.titulo);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-peli',
  standalone: true,
  imports: [],
  templateUrl: './ficha-peli.component.html',
  styleUrl: './ficha-peli.component.scss'
})
export class FichaPeliComponent {
  constructor(private ar:ActivatedRoute) {}
  private titulo: string = '';
  ngOnInit():void {
    this.ar.params.subscribe(params => {
      this.titulo = params['titulo'];
    });
  }
}

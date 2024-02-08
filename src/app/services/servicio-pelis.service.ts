import { Injectable } from '@angular/core';
import { Peli } from '../interfaces/peli';

@Injectable({
  providedIn: 'root'
})
export class ServicioPelisService {
  public pelis:Peli[] = [];
  constructor() { }
  agregarPeli(nuevaPeli:Peli) {
    let index = this.pelis.push(nuevaPeli);
    console.log(`nueva peli ${index}: ${JSON.stringify(nuevaPeli)}`);
  }
  eliminarPeli(titulo:string) {
    // TODO
  }
  modificarPeli(titulo:string,peliModificada:Peli) {
    // TODO
  }

}


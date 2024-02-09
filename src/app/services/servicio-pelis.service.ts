import { Injectable } from '@angular/core';
import { Peli } from '../interfaces/peli';

@Injectable({
  providedIn: 'root'
})
export class ServicioPelisService {
  public pelis: Peli[] = [];
  constructor() {
    this.pelis = recuperarPeliculas();
  }
  agregarPeli(nuevaPeli: Peli) {
    let index = this.pelis.push(nuevaPeli);
    guardarPeliculas(this.pelis);
  }
  eliminarPeli(titulo: string) {
    let posicion = this.pelis.findIndex((p) => p.title === titulo);
    if (posicion >= 0) {
      this.pelis.splice(posicion,1);
      guardarPeliculas(this.pelis);
    }
  }
  modificarPeli(titulo: string, peliModificada: Peli) {
    // TODO
  }
}

const LOCAL_STORAGE_NAME = 'peliculas';
function guardarPeliculas(pelis: Peli[]) {
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(pelis));
}

function recuperarPeliculas(): Peli[] {
  let peliculasJSON = localStorage.getItem(LOCAL_STORAGE_NAME);
  if (peliculasJSON != null) {
    return JSON.parse(peliculasJSON);
  }
  return [];
}

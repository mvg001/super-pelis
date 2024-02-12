import { Injectable } from '@angular/core';
import { Peli } from '../interfaces/peli';
const LOCAL_STORAGE_NAME = 'peliculas';

@Injectable({
  providedIn: 'root'
})
export class ServicioPelisService {

  public pelis: Peli[];
  constructor() {
    this.pelis = recuperarPeliculas(LOCAL_STORAGE_NAME);
  }
  agregarPeli(nuevaPeli: Peli) {
    let index = this.pelis.push(nuevaPeli);
    guardarPeliculas(LOCAL_STORAGE_NAME,this.pelis);
  }
  eliminarPeli(titulo: string) {
    let posicion = this.pelis.findIndex((p) => p.title === titulo);
    if (posicion >= 0) {
      this.pelis.splice(posicion,1);
      guardarPeliculas(LOCAL_STORAGE_NAME,this.pelis);
    }
  }
  buscarPeli(titulo:string):Peli|undefined {
    let posicion = this.pelis.findIndex((p) => p.title === titulo);
    if (posicion >= 0) {
      return {...this.pelis[posicion]};
    }
    return undefined;
  }
  modificarPeli(titulo: string, peliModificada: Peli) {
    // TODO
  }
}

function guardarPeliculas(local_name:string, pelis: Peli[]) {
  localStorage.setItem(local_name, JSON.stringify(pelis));
}

function recuperarPeliculas(local_name:string): Peli[] {
  let peliculasJSON = localStorage.getItem(local_name);
  if (peliculasJSON != null) {
    return JSON.parse(peliculasJSON);
  }
  return [];
}

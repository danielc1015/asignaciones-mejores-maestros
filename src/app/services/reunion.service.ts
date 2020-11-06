import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  constructor() { }

  obtenerTodas(){
    let reuniones = JSON.parse(localStorage.getItem('reuniones'));
    if (!reuniones) {
      reuniones = [];
    }
    return reuniones;
  }

  crear(): void {

  }

  obtenerPorID(id: number): any {
    const reuniones = this.obtenerTodas();

    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < reuniones.length; index++) {
      const reunion = reuniones[index];
      if (reunion.id === id) {
        return reunion;
      }
    }
    return null;

  }



}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  constructor() { }

  obtenerTiposAsignacion(): any[] {
    return [
      {id: 1, nombre: 'Primera Conversación'},
      {id: 2, nombre: 'Primera Revisita'},
      {id: 3, nombre: 'Segunda Revisita'},
      {id: 4, nombre: 'Estudio Bíblico'},
      {id: 5, nombre: 'Discurso'},
    ];
  }
}

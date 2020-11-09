import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor() { }

  // tslint:disable-next-line:typedef
  obtenerTodos() {
    let estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
    if (!estudiantes) {
      estudiantes = [];
    }
    return estudiantes;
  }

  // tslint:disable-next-line:typedef
  obtenerUltimos() {
    const estudiantes = this.obtenerTodos();
    return estudiantes.sort((a, b) => a.ultimaAsignacion - b.ultimaAsignacion);
  }
  // tslint:disable-next-line:typedef
  obtenerUltimosQue(genero: string) {
    let estudiantes = this.obtenerTodos();
    estudiantes = estudiantes.filter(est => est.genero === genero);
    return estudiantes.sort((a, b) => a.ultimaAsignacion - b.ultimaAsignacion);
  }


  modificarLista(estudiante): void {
    const todos = this.obtenerTodos();
    todos.push(estudiante);
    localStorage.setItem('estudiantes', JSON.stringify(todos));
  }
}

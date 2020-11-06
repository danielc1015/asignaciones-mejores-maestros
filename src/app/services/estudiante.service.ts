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
  obtenerUltimoHombre() {
    let estudiantes = this.obtenerTodos();
    estudiantes = estudiantes.filter(est => est.genero === 'hombre');
    const estudiantesOrdenados = estudiantes.sort((a, b) => a.ultimaAsignacion - b.ultimaAsignacion);

    console.log(estudiantesOrdenados);

  }

  modificarLista(estudiante): void {
    const todos = this.obtenerTodos();
    todos.push(estudiante);
    localStorage.setItem('estudiantes', JSON.stringify(todos));
  }
}

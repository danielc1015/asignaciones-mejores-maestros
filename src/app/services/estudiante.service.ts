import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor() { }

  obtenerTodos() {
    let estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
    if (!estudiantes) {
      estudiantes = [];
    }
    return estudiantes;
  }

  modificarLista(estudiante): void {
    const todos = this.obtenerTodos();
    todos.push(estudiante);
    localStorage.setItem('estudiantes', JSON.stringify(todos));
  }
}

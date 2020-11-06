import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-estudiante-crear',
  templateUrl: './estudiante-crear.component.html',
  styleUrls: ['./estudiante-crear.component.scss']
})
export class EstudianteCrearComponent implements OnInit {
  estudiantes;
  estudianteForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required])
  });

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.obtenerEstudiantes();
    this.setIDNuevo();
  }

  // tslint:disable-next-line:typedef
  obtenerEstudiantes() {
    this.estudiantes = this.estudianteService.obtenerTodos();
  }

  setIDNuevo(): void {
    // tslint:disable-next-line:triple-equals
    if (this.estudiantes != '') {
      const ultimo = this.estudiantes[this.estudiantes.length - 1];

      this.estudianteForm.controls.id.setValue(ultimo.id + 1);
    } else {
      this.estudianteForm.controls.id.setValue(1);
    }
  }

  submitEstudiante(): void {
    const estudiantes = this.estudianteService.obtenerTodos();
    let estudiantesActualiado = [];
    const estudiante = {
      id: this.estudianteForm.value.id,
      nombre: this.estudianteForm.value.nombre,
      genero: this.estudianteForm.value.genero,
      ultimaAsignacionTemp: null,
      ultimaAsignacion: null
    };
    if (estudiantes) {
      estudiantes.push(estudiante);
      estudiantesActualiado = estudiantes;
    } else {
      estudiantesActualiado.push(estudiante);
    }
    localStorage.setItem('estudiantes', JSON.stringify(estudiantesActualiado));
    this.estudianteForm.reset();
    this.obtenerEstudiantes();
    this.setIDNuevo();
  }
}

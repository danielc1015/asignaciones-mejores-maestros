import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ReunionService } from 'src/app/services/reunion.service';

@Component({
  selector: 'app-reunion-detalle',
  templateUrl: './reunion-detalle.component.html',
  styleUrls: ['./reunion-detalle.component.scss']
})
export class ReunionDetalleComponent implements OnInit {

  ID: number;
  reunion;
  tiposAsignacion;
  estudiante1;
  estudiante2;
  estudiantes: any[];
  estudiantesHombre;
  estudiantesMujer;
  asignacion;

  constructor(
    private activatedRoute: ActivatedRoute,
    private reunionService: ReunionService,
    private asignacionService: AsignacionService,
    private estudianteService: EstudianteService
    ) { }

  ngOnInit(): void {
    this.tiposAsignacion = this.asignacionService.obtenerTiposAsignacion();
    // tslint:disable-next-line:radix
    this.ID = parseInt(this.activatedRoute.snapshot.params.id);
    this.obtenerReunion();
    this.estudiantes = this.estudianteService.obtenerUltimos();
    this.estudiantesHombre = this.estudianteService.obtenerUltimosQue('hombre');
    this.estudiantesMujer = this.estudianteService.obtenerUltimosQue('mujer');
    this.asignacion = {
      tipoAsignacion: null,
      estudiante1: this.estudiantes[0],
      estudiante2: 2,
      genero: null
    };
  }

  obtenerReunion(): void {
    console.log(this.ID);

    this.reunion = this.reunionService.obtenerPorID(this.ID);
    console.log(this.reunion);
  }

  // tslint:disable-next-line:typedef
  onEstudiante1Change(e) {
    console.log(this.asignacion.estudiante1);
    const seleccionado = this.estudiantes.find(est => est.id == e.target.value);
    this.asignacion.genero = seleccionado.genero;
    this.asignacion.estudiante1 = seleccionado;
  }

  // tslint:disable-next-line:typedef
  onEstudiante2Change(e) {
    const seleccionado = this.estudiantes.find(est => est.id == e.target.value);
    this.asignacion.estudiante2 = seleccionado;
  }

}

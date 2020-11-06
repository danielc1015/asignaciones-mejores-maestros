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
  asignacionForm = new FormGroup({
    tipoAsignacion: new FormControl('', [Validators.required])
  });

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
    this.estudianteService.obtenerUltimoHombre();
  }

  obtenerReunion(): void {
    console.log(this.ID);

    this.reunion = this.reunionService.obtenerPorID(this.ID);
    console.log(this.reunion);
  }

}

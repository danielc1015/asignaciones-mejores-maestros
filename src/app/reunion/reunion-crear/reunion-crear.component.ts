import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReunionService } from 'src/app/services/reunion.service';

@Component({
  selector: 'app-reunion-crear',
  templateUrl: './reunion-crear.component.html',
  styleUrls: ['./reunion-crear.component.scss']
})
export class ReunionCrearComponent implements OnInit {

  reuniones;
  reunionForm = new FormGroup({
    id: new FormControl(''),
    fecha: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private reunionService: ReunionService) { }

  ngOnInit(): void {
    this.obtenerReuniones();
    this.setIDNuevo();
  }

  obtenerReuniones(): void {
   this.reuniones = this.reunionService.obtenerTodas();
  }

  setIDNuevo(): void {
    if (this.reuniones != '') {
      const ultimaReu = this.reuniones[this.reuniones.length - 1];
      this.reunionForm.controls.id.setValue(ultimaReu.id + 1);
    } else {
      this.reunionForm.controls.id.setValue(1);
    }
  }

  submitReunion(): void {
    let nuevaReuniones = [];
    const reunion = {
      id: this.reunionForm.value.id,
      fecha: this.reunionForm.value.fecha,
      asignaciones: []
    };
    if (this.reuniones) {
      this.reuniones.push(reunion);
      nuevaReuniones = this.reuniones;
    } else {
      nuevaReuniones.push(reunion);
    }
    localStorage.setItem('reuniones', JSON.stringify(nuevaReuniones));
    this.router.navigate(['/reunion', this.reunionForm.value.id]);
    this.reunionForm.reset();
  }
}

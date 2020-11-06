import { Component, OnInit } from '@angular/core';
import { Reunion } from 'src/app/models/Reunion';
import { ReunionService } from 'src/app/services/reunion.service';

@Component({
  selector: 'app-reunion-lista',
  templateUrl: './reunion-lista.component.html',
  styleUrls: ['./reunion-lista.component.scss']
})
export class ReunionListaComponent implements OnInit {

  constructor(private reunionService: ReunionService) { }
  reuniones: Reunion[];

  ngOnInit(): void {
    this.obtenerReuniones();
  }

  obtenerReuniones(): void {
    this.reuniones = this.reunionService.obtenerTodas();
    console.log(this.reuniones);
  }
}

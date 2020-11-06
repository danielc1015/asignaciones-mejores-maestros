import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteCrearComponent } from './estudiante/estudiante-crear/estudiante-crear.component';
import { EstudianteListaComponent } from './estudiante/estudiante-lista/estudiante-lista.component';
import { ReunionCrearComponent } from './reunion/reunion-crear/reunion-crear.component';
import { ReunionDetalleComponent } from './reunion/reunion-detalle/reunion-detalle.component';
import { ReunionListaComponent } from './reunion/reunion-lista/reunion-lista.component';

const routes: Routes = [
  { path: 'reunion', component: ReunionListaComponent},
  { path: 'reunion/nueva/crear', component: ReunionCrearComponent},
  { path: 'reunion/:id', component: ReunionDetalleComponent},
  { path: 'estudiante', component: EstudianteListaComponent },
  { path: 'estudiante/nuevo/crear', component: EstudianteCrearComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

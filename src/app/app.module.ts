import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePy from '@angular/common/locales/es-PY';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReunionListaComponent } from './reunion/reunion-lista/reunion-lista.component';
import { ReunionDetalleComponent } from './reunion/reunion-detalle/reunion-detalle.component';
import { ReunionCrearComponent } from './reunion/reunion-crear/reunion-crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstudianteCrearComponent } from './estudiante/estudiante-crear/estudiante-crear.component';
import { EstudianteListaComponent } from './estudiante/estudiante-lista/estudiante-lista.component';
registerLocaleData(localePy, 'es');

@NgModule({
  declarations: [
    AppComponent,
    ReunionListaComponent,
    ReunionDetalleComponent,
    ReunionCrearComponent,
    EstudianteCrearComponent,
    EstudianteListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

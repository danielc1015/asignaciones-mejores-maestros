import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReunionListaComponent } from './reunion/reunion-lista/reunion-lista.component';
import { ReunionDetalleComponent } from './reunion/reunion-detalle/reunion-detalle.component';
import { ReunionCrearComponent } from './reunion/reunion-crear/reunion-crear.component';

@NgModule({
  declarations: [
    AppComponent,
    ReunionListaComponent,
    ReunionDetalleComponent,
    ReunionCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

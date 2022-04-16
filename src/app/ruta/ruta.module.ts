import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Ruta1Component } from './ruta1/ruta1.component';
import { Ruta2Component } from './ruta2/ruta2.component';
import { Ruta3Component } from './ruta3/ruta3.component';
import { RutaRoutingModule } from './ruta-routing.module';

@NgModule({
  declarations: [Ruta1Component, Ruta2Component, Ruta3Component],
  imports: [CommonModule, RutaRoutingModule, HttpClientModule],
})
export class RutaModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ruta1Component } from './ruta1/ruta1.component';
import { Ruta2Component } from './ruta2/ruta2.component';
import { Ruta3Component } from './ruta3/ruta3.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'route1', component: Ruta1Component },
      { path: 'route2', component: Ruta2Component },
      { path: 'route3', component: Ruta3Component },
      { path: '', redirectTo: 'route1' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RutaRoutingModule {}

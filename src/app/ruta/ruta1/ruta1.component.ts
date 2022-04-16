import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ruta1',
  templateUrl: './ruta1.component.html',
})
export class Ruta1Component implements OnInit {
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public nombre: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){ }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      //this.nombre = params['nombre']; otra manera pero la de arriba es mejor :v
    });
  }
  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}

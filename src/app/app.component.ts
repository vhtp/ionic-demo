import { Component, OnInit } from '@angular/core';
import { LocalidadesService } from './servicios/localidades.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private _slocal : LocalidadesService) {}
  ngOnInit(): void {


this._slocal.getProvincias();

   
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  constructor(private http : HttpClient) { }

  getProvincias(){

    let url = environment.url_servicios + "localidades/todos";

this.http.get(url).subscribe(resp =>{

console.log(resp);



});



  }
}

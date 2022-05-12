

import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  activarGeolocalizacion: boolean = false;
  cargandogeo = false;
  
  post = {
    mensaje: '',
    coords: null,
    posicion: false

  }
  constructor(private geolocation: Geolocation) { 



  }


  

  acticarGelocalixacion() {

    
    
    if (this.acticarGelocalixacion) {

      this.geolocation.getCurrentPosition().then((resp) => {

       this.cargandogeo = true;
        console.log(resp.coords);



      })




    }else{


      this.cargandogeo = false;
    }

  }



}

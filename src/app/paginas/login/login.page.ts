import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { UsuarioService } from '../../servicios/usuario.service';
import { BaseDatosService } from '../../servicios/base-datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  @ViewChild('slidePrincipal', { static: true }) slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {

    slidesPerView: 3.5
  }


    email:string= 'victortapia12@hotmail.com';
    pass:string = '123456';



  constructor(private _uservice: UsuarioService, public database: BaseDatosService) { 

  }

  ionViewDidEnter(){
    /*this.database.createDatabase().then((resp) => {
      console.log(resp);
    });*/
  }

  ngOnInit() {

    this.slides.lockSwipes(true);
  }

  ingresar(){

    this._uservice.ingresar(this.email,this.pass);
          
  }

  registro(fRegistro) {

    console.log(fRegistro.valid);

  }

  seleccionarAvatar(avatar) {

    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;

  }

  verPaginaDeLogin(act: string) {
    this.slides.lockSwipes(false);
    if (act === 'registro') {
      this.slides.slideTo(0);
    }
    else {
      this.slides.slideTo(1);
    }
    this.slides.lockSwipes(true);
  }
}

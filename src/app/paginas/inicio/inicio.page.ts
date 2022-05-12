import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public _user : UsuarioService,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }


  irTab1(){

    this.navCtrl.navigateForward('/main/tabs/tab1',{animated: true});

  }
}

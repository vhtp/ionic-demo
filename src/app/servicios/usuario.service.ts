import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { AlertController, LoadingController, NavController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


token1 : string =null;
dataUsuario :any;
  constructor(private http : HttpClient,
    public alertController: AlertController,
    private platform:Platform,
    private storage: Storage ,
    private navCtrl: NavController,
    public loadingController: LoadingController
    ) { }




    async ingresar(correo: string, contrasena: string) {

      this.presentLoadingWithOptions("Iniciando Sesion.....");
      
          let data = new URLSearchParams();
          data.append("correo", correo);
          data.append("contrasena", contrasena);
      
          let url = environment.url_servicios + "login";
      
          return this.http.post(url, { correo, contrasena }).subscribe(async (resp: any) => {
      
            let data_resp = resp;
            this.dataUsuario = resp;
            console.log(data_resp);
      
            if (data_resp.error) {
      
              const alert = await this.alertController.create({
                header: 'Alert',
                subHeader: data_resp.mensaje,
                buttons: ['OK']
              })
      
              await alert.present();
              this.token1 = null;
              this.storage.clear();
            } else {
      
             
              //this.guardar_storage();
             this.navCtrl.navigateForward('/inicio',{animated: true});
      
            }
        this.loadingController.dismiss();
      
          })
      
        }

        async presentLoadingWithOptions(mensaje) {
          const loading = await this.loadingController.create({
            spinner: "bubbles",  
            mode: "ios"   ,
            message: mensaje,
            translucent: true,
            cssClass: 'custom-class custom-loading'
          });
          return await loading.present();
        }

      



}

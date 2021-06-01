import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiProvider]
})
export class HomePage {

  public lista;
  public user: any;
  public url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    this.url = 'http://localhost:8080/Admin/api/';
    this.user = this.navParams.get('usuario');
  }

  //getEventList
  ionViewDidLoad(){

    console.log("USUARIO> " + this.user);

    this.api.obtenerEventos()
      .subscribe(
        (data)=>{this.lista = data;},
        (error)=>{console.log(error);}
        )
    }

  //VER DETALLES DEL EVENTO
  goPage(event, usuario){
    
    if(this.user!=undefined){
      this.navCtrl.push("DetailsPage", {event: event, usuario: usuario});
    }else{
      this.navCtrl.push("LoginPage");
    }
  }

  //PAGINA DE COMENTARIOS
  goComent(event, usuario){
    
    if(this.user!=undefined){
      this.navCtrl.push("ComentarioPage", {event: event, usuario: usuario});
    }else{
      this.navCtrl.push("LoginPage");
    }
  }

  goPrivate(event, usuario){
    
    if(this.user!=undefined){
      console.log(">>GO PRIVADOS<<")
      this.navCtrl.push("ComentarioPage", {event: event, usuario: usuario});
    }else{
      console.log(">>Login<<")
      this.navCtrl.push("LoginPage");
    }
  }

}

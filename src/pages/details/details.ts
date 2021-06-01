import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../home/home';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [ApiProvider]
})
export class DetailsPage {

  public url: string;
  public evento: any;
  public user;
  EvenId="Hola ts";

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
    this.evento = this.navParams.get('event');
    this.user = this.navParams.get('usuario');
  }

  ionViewDidLoad() {
    console.log("VISTA CARGADA>> ");
  }

  public backHome(){
    this.navCtrl.push(HomePage);
  }

  goComent(){
    
    if(this.user!=undefined){
      this.navCtrl.push("ComentarioPage", {event: this.evento, usuario: this.user});
    }else{
      this.navCtrl.push("LoginPage");
    }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-comentario',
  templateUrl: 'comentario.html',
  providers: [ApiProvider]
})
export class ComentarioPage {

  public event: any;
  public user: any;
  public comentario: string;
  public lista;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    this.event = this.navParams.get('event');
    this.user = this.navParams.get('usuario');
  }

  ionViewDidLoad() {
    
    this.api.getPublicComent(this.event.id).subscribe(
      (data)=>{
        this.lista = data;},
      (error)=>{console.log(error);}
      )
  }
  //SUBMIT DEL COMENTARIO
  onSubmitComent(){

    if(this.comentario == undefined){
      this.comentario = "";
    }

    var data = {fecha: this.getFecha(),
                mensaje: this.comentario,
                residente: this.user.nombres,
                id: 0,
                emisor: this.user.id,
                motivo: this.event.id,
                privado: 0,
                visto: 0
              };

    this.api.postPublicComent(data).subscribe(
      (data)=>{
        console.log("POST ECHO>>"+data)
        console.log("POST ECHO>>"+data.toString())

      },
      (error)=>{console.log(error);}
    )
    

  }

  //OBTENER Y DAR FORMATO A LA FECHA
  getFecha(){
    var dateDay = new Date();
    var aa = dateDay.getFullYear();
    var mm = dateDay.getMonth() + 1;
    var dd = dateDay.getDate();
    var hh = dateDay.getHours();
    var mn = dateDay.getMinutes();
    var md = 'AM';

    if(hh>12){
      hh = hh-12;
      md = 'PM';
    }

    var fecha = aa+"-"+mm+"-"+dd+" "+hh+":"+mn + " "+md;
    return fecha;
  }

  //METODO PARA HACER EL POST

}

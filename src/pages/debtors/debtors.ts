import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-debtors',
  templateUrl: 'debtors.html',
  providers: [ApiProvider]
})
export class DebtorsPage {

  public lista;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.api.getDeptors().subscribe(
      (data)=>{
        this.lista = data;},
      (error)=>{console.log(error);}
      )    
  }

  goPage(){
    console.log(">>>>>>>>>goPage");
  }

}

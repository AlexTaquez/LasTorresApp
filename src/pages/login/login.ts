import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ApiProvider]
})
export class LoginPage {

  public email: string;
  public user: string;
  public userName: string;
  public loged;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {this.user="";}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSubmitLog(){
    this.user = "";
    for(let i=0; i <this.email.length; i++){
      if(this.email.charAt(i)=="@"){
        break;};
      this.user += this.email.charAt(i);};

    this.api.logUser(this.user).subscribe(
      (data)=>{
        this.loged = data;
        console.log(">>>>>>>USER:" + this.loged.id);

        if(this.loged.id!=0){
          this.userName = this.loged.nombres;
          this.navCtrl.push(HomePage, {usuario: this.loged});
        }else{
          this.userName = "Cuenta no registrada";
        }
      },
      (error)=>{console.log(error);})
  }

  dudoresPage(){
    this.navCtrl.push("DebtorsPage")
  }

}

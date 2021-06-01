import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;

  public rootPage:any;
  public pages: Array<{title:string, component:string, icon:string}>;
  public bar: Array<{title:string, component:string, icon:string}>;
  public user: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    this.rootPage = HomePage;
    
    this.pages = [
      {title:"INICIO",      component:"HomePage",     icon:"home"},
      {title:"CALENDARIO",  component:"CalendarPage", icon:"calendar"},
      {title:"MIS EVENTOS", component:"MyeventsPage", icon:"chatbubbles"},
      {title:"DEUDORES",    component:"DebtorsPage",  icon:"sad"},
      {title:"PAGOS",       component:"PaymentsPage", icon:"card"},
      {title:"REPORTES",    component:"ReportsPage",  icon:"warning"},
      {title:"SALIR",       component:"LoginPage",    icon:"power"},
    ]

    this.bar = [this.pages[0],this.pages[3],this.pages[6]];
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: string){

      if(page != "HomePage"){
        this.nav.setRoot(page);  
      }else{
        this.nav.setRoot(HomePage);
      } 
    }    
}


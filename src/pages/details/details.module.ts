import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPage } from './details';
//import { HttpClientModule } from '@angular/common/http';
//import { ApiProvider } from '../../providers/api/api';

@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
    //HttpClientModule,
    IonicPageModule.forChild(DetailsPage),
  ],
  providers: [
    //ApiProvider
  ]
})
export class DetailsPageModule {}

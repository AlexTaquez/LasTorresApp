import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DebtorsPage } from './debtors';

@NgModule({
  declarations: [
    DebtorsPage,
  ],
  imports: [
    IonicPageModule.forChild(DebtorsPage),
  ],
})
export class DebtorsPageModule {}

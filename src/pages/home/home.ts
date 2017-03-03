import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CheckingPage } from '../checking/checking';
import { MoneyMarketPage } from '../moneymarket/moneymarket';
import { SavingPage } from '../saving/saving';
import { CalculateFutureInterestPage } from '../calculatefutureinterest/calculatefutureinterest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public checkingPage: any;
  public moneyMarketPage: any;
  public savingPage: any;
  public calculateFutureInterestPage: any;

  constructor(public navCtrl: NavController) {
    this.checkingPage = CheckingPage;
    this.moneyMarketPage = MoneyMarketPage;
    this.savingPage = SavingPage;
    this.calculateFutureInterestPage = CalculateFutureInterestPage;
  }

}

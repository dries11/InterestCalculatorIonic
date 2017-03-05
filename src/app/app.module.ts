import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalculateFutureInterestPage } from '../pages/calculatefutureinterest/calculatefutureinterest';
import { CheckingPage } from '../pages/checking/checking';
import { MoneyMarketPage } from '../pages/moneymarket/moneymarket';
import { SavingPage } from '../pages/saving/saving'
import { Http} from '@angualr/http';
import { NewAccount} from '../services/newaccount';
import { SearchAccount } from '../services/searchaccount'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalculateFutureInterestPage,
    CheckingPage,
    MoneyMarketPage,
    SavingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalculateFutureInterestPage,
    CheckingPage,
    MoneyMarketPage,
    SavingPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, NewAccount, SearchAccount ]
})
export class AppModule {}

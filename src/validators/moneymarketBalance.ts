import { FormControl } from '@angular/forms';

export class MoneyMarketBalanceValidator {

    static isValid(control: FormControl): any {

        if(isNaN(control.value)){
            return {
                "Not a number": true
            };
        }

        if(control.value % 1 !== 0){
            return {
                "No pennies please": true
            };
        }

        if(control.value < 10000){
            return {
                "Below the RMB":true
            };
        }

        return null;
    }

}
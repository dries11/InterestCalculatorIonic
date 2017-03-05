import { FormControl } from '@angular/forms';

export class SavingsBalanceValidator{

    static isValid(control: FormControl): any {

        if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }

        if(control.value % 1 !== 0){
            return {
                "no pennies please": true
            };
        }

        if(control.value < 100){
            return{
                "starting balance must be above RMB" : true
            };
        }

        return null;
    }

}
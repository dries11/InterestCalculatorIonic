import { FormControl } from '@angular/forms';

export class SavingsInterestRate{

    static isValid(control: FormControl): any{

        if(isNaN(control.value)){
            return {
                "not a number" : true
            };
        }

        if(control.value < .75){
            return {
                "interest rate too low" : true
            };
        }

        if(control.value > 1.5){
            return {
                "interest rate too high" : true
            };
        }

        return null;

    }

}
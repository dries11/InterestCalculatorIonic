import { FormControl } from '@angular/forms';

export class MoneyMarketInterestRate{

static isValid(control: FormControl): any{
    if(isNaN(control.value)){
        return {
            "not a number": true
        };
}
if(control.value <3.5){
    return {
        "interest rate too low": true
    };
}
if(control.value > 6){
    return {
        "interest rate too high": true
    };
}
    return null;
}

}

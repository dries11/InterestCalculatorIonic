import { Injectable } from '@angular/core';

@Injectable()
export class UserService{
    private _firstName: string;
    private _lastName: string;
    private _startingBalance: number;

    constructor(){
        this._firstName = " ";
        this._lastName = " ";
        this._startingBalance = 0;
    }

    get firstName(){
        return this.firstName;
    }
    set firstName(newVal){
        console.log ('Set firstName = ' + newVal);
        this._firstName = newVal;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(newVal){
        console.log('Set lastName = ' + newVal);
        this._lastName = newVal;
    }

    get startingBalance(){
        return this._startingBalance;
    }
    set startingBalance(newVal){
        console.log('Set startingBalance = ' + newVal);
        this.startingBalance = newVal;
    }
}
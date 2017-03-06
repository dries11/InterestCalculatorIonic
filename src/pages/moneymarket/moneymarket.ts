import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoneyMarketBalanceValidator } from '../../validators/moneymarketBalance';
import { MoneyMarketInterestRate } from '../../validators/moneymarketInterestRate';
import { AlertController } from 'ionic-angular'; 
import { NewAccount } from '../../services/newaccount';
import { SearchAccount } from '../../services/searchaccount';



@Component({
    selector: 'moneymarket-page',
    templateUrl: 'moneymarket.html'
})

export class MoneyMarketPage{

    moneyMarketAccountForm : FormGroup;
    submitAttempt: boolean = false;
    
    public transaction: any;
    public recurringTransactions: any = [];

    constructor(public navCtrl:NavController, public alertCtrl:AlertController, public formBuilder: FormBuilder){
        this.moneyMarketAccountForm = formBuilder.group({
            firstName:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            lastName:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            accountType:['Money Market Account'],
            startingBalance: ['100', Validators.compose([Validators.required, MoneyMarketBalanceValidator.isValid])],
            interestRate: ['5', Validators.compose([MoneyMarketInterestRate.isValid, Validators.required])],
            overdraftPenalty: ['30'],
            requiredMinimumBalance: ['10000']
        });
    }

    showConfirm(){
        let confirm = this.alertCtrl.create({
            title: "Are you sure?",
            message: "Confirm all fields before submitting",
            buttons: [
                {
                    text: 'Create',
                    handler:() => {
                        console.log("Clicked Create") //change this to submit function
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log("Clicked Cancel") //change to clear all fields
                    }
                }
            ]
        });
        confirm.present();
        console.log(this.recurringTransactions);
    }

    addTransaction(): any{
        let prompt = this.alertCtrl.create({
            title: "Add Recurring Transaction",
            message: "Enter the amount, date, and description",
            inputs: [
                {
                    name: 'Amount',
                    placeholder: 'Amount'
                },
                {
                    name: 'Date',
                    placeholder: 'MM-DD'
                },
                {
                    name: 'Description',
                    placeholder: 'Describe the Transaction'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log("Clicked Cancel");
                    }
                },
                {
                    text: 'Add',
                    handler: data => {
                            this.transaction = data;
                            this.recurringTransactions.push(this.transaction);
                        }
                }
            ]
        });
        prompt.present();
    }

        submitClicked(){

        this.submitAttempt = true;

        if(this.moneyMarketAccountForm.valid){
            this.showConfirm();
            console.log(this.moneyMarketAccountForm.value);
        }
        else{
            alert("Not able to proccess your request. Try again");
        }
    }

}
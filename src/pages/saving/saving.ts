import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SavingsBalanceValidator } from '../../validators/savingsBalance';
import { SavingsInterestRate } from '../../validators/savingsInterestRate';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'saving-page',
    templateUrl: 'saving.html'
})

export class SavingPage{
    
    @ViewChild('createAccountCard') createAccountCard : any;

    savingsAccountForm : FormGroup;
    submitAttempt: boolean = false;

    public transaction: any;
    public recurringTransactions: any = [];

    constructor(public navCtrl:NavController, public alertCtrl:AlertController, public formBuilder: FormBuilder){
        this.savingsAccountForm = formBuilder.group({
            firstName:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            lastName:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            accountType:['Savings Account'],
            startingBalance: ['100', Validators.compose([Validators.required, SavingsBalanceValidator.isValid])],
            interestRate: ['1', Validators.compose([SavingsInterestRate.isValid])],
            overdraftPenalty: ['30'],
            requiredMinimumBalance: ['100']
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
                        console.log("Create clicked") //change this to submit function
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log("Cancel clicked") //change to clear all fields
                    }
                }
            ]
        })
        confirm.present();
        console.log(this.recurringTransactions);
    }

    addTransaction(): any{
        let prompt = this.alertCtrl.create({
            title: "Add Recurring Transaction",
            message: "Enter the amount, and frequency of payments in days",
            inputs: [
                {
                    name: 'Amount',
                    placeholder: 'Amount'
                },
                {
                    name: 'Frequency',
                    placeholder: 'Number of Days'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log("didSubmit()");
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

        if(this.savingsAccountForm.valid){
            this.showConfirm();
            console.log(this.savingsAccountForm.value);
        }
        else{
            alert("Not able to proccess your request. Try again");
        }
    }

} 
   
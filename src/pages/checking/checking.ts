import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { NewAccount} from '../../services/newaccount';
import { SearchAccount} from '../../services/searchaccount'
import { CheckingBalanceValidator } from '../../validators/checkingBalance';

@Component({
    selector: 'checking-page',
    templateUrl: 'checking.html'
})

export class CheckingPage{

   private user: any;
   public transaction: any;
   public recurringTransactions: any = [];

    constructor(public navCtrl:NavController, public alertCtrl:AlertController, public newAccountService:NewAccount,
     public newSearchAccountService:SearchAccount){
    }



    @ViewChild('createAccountCard') createAccountCard: any;

    checkingAccountForm: FormGroup;
    submitAttempt: boolean = false;

    public transaction: any;
    public recurringTransactions: any = [];

    constructor(public navCtrl:NavController, public alertCtrl:AlertController, public formBuilder: FormBuilder){
        this.checkingAccountForm = formBuilder.group({
            firstName:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            lastName:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            accountType:['Checking Account'],
            startingBalance: ['', Validators.compose([Validators.required, CheckingBalanceValidator.isValid])],
            interestRate: ['0'],
            overdraftPenalty: ['30'],
            requiredMinimumBalance: ['0'],
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
                        console.log("didSubmit()") //change this to submit function
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log("didSubmit()") //change to clear all fields
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
                        console.log("didSubmit()");

}
        showPrompt(): any{
            let prompt = this.alertCtrl.create({
                title: "Add Recurring Transaction",
                message: "Enter the amount, date, and desription",
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
                        placeholder: ' Describe the Transaction'
                    }
                ],
                buttons: [
                 {
                    text: ' Cancel',
                    handler: data=>{
                        console.log("Cancel clicked");

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
    editTransaction(transaction){
        let prompt = this.alertCtrl.create({
            title: 'Edit Transactions',
            inputs: [{
                name:'Amount',
                placeholder: 'Amount'
            },
            {
                name:'Date',
                placeholder:'MM-DD'
            },
            {
                name:'Description',
                placeholder:'Describe the Transaction'
            }],
            buttons: [{
                text: 'Cancel'
            },
            {
                text: 'Save',
                handler: data => {
                    let index = this.recurringTransactions.indexOf(transaction);
                    if(index > -1){
                        this.recurringTransactions[index] = data;
                    }
                }
            }
            ]
        });
        prompt.present();
    }


    deleteTransaction(transaction){
        let index = this.recurringTransactions.indexOf(transaction);
        if(index > -1){
            this.recurringTransactions.splice(index,1);
        }

    submitClicked(){

        this.submitAttempt = true;

        if(this.checkingAccountForm.valid){
            this.showConfirm();
            console.log(this.checkingAccountForm.value);
        }
        else{
            alert("Not able to proccess your request. Try again");
        }
    }
}
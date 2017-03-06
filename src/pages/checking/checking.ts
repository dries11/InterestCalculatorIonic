import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { CheckingBalanceValidator } from '../../validators/checkingBalance';
import { HomePage } from '../../pages/home/home';
import { CalculateFutureInterestPage } from '../../pages/calculatefutureinterest/calculatefutureinterest';
import { NewAccountService } from '../../services/newaccount';

@Component({
    selector: 'checking-page',
    templateUrl: 'checking.html'
})

export class CheckingPage{

    @ViewChild('createAccountCard') createAccountCard: any;

    homePage: any;
    cfiPage: any;

    checkingAccountForm: FormGroup;
    submitAttempt: boolean = false;

    public transaction: any;
    public recurringTransactions: any = [];

    constructor(public navCtrl:NavController, public alertCtrl:AlertController, public formBuilder: FormBuilder, public newAccountService: NewAccountService){
        this.checkingAccountForm = formBuilder.group({
            firstName:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            lastName:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            accountType:['Checking Account'],
            balance: ['', Validators.compose([Validators.required, CheckingBalanceValidator.isValid])],
            interestRate: ['0'],
            overdraftPenalty: ['30'],
            requiredMinimumBalance: ['0'],
        });
        this.homePage = HomePage;
        this.cfiPage = CalculateFutureInterestPage;
    }
    

    showConfirm(){
        let confirm = this.alertCtrl.create({
            title: "Are you sure?",
            message: "Confirm all fields before submitting",
            buttons: [
                {
                    text: 'Create',
                    handler:() => {
                        this.newAccountService.didSubmit(this.checkingAccountForm.value);
                        this.switchPage();
                        console.log("Create clicked"); //change this to submit function
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log("Cancel clicked") //change to clear all fields
                    }
                }
            ]
        });
        confirm.present();
        console.log(this.recurringTransactions);

    }
        
    showPrompt(): any{
        let prompt = this.alertCtrl.create({
            title: "Add Recurring Transaction",
            message: "Enter the amount, and frequency of payments in days",      
            inputs: [{
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

    switchPage(){

        let prompt = this.alertCtrl.create({
            title: "Would you like to calculate future interest?",
            message: "Choose one below",
            buttons:[
                {
                    text:'Yes',
                    handler:() => {
                        this.navCtrl.push(this.cfiPage);
                    }
                },
                {
                    text:'No',
                    handler:() => { 
                        this.navCtrl.push(this.homePage);
                    }
                }
            ]
        });
        prompt.present();
    }
}
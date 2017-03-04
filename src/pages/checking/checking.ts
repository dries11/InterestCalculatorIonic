import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'checking-page',
    templateUrl: 'checking.html'
})

export class CheckingPage{
    public transaction: any;
    public recurringTransactions: any = [];

    constructor(public navCtrl:NavController, public alertCtrl:AlertController){}
    
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
        showPrompt(): any{
            let prompt = this.alertCtrl.create({
                title: "Add Recurring Transaction",
                message: "Enter the amount, date, and desription",
                inputs: [
                    {
                        name: ' Amount',
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
                handler: data =>{
                    this.transaction = data;
                    this.recurringTransactions.push(this.transaction);
                }
            }
                ]
            })
        prompt.present();
    }
}
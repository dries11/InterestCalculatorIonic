import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
    selector: 'calculatefutureinterest-page',
    templateUrl: 'calculatefutureinterest.html'
})

export class CalculateFutureInterestPage{

    calculateInterestSearchForm: FormGroup;
    calculateInterestForm: FormGroup;
    
    submitAttempt: boolean = false;

    constructor(public navCtrl:NavController, public formBuilder: FormBuilder, public loadingCtrl: LoadingController){
        this.calculateInterestSearchForm = formBuilder.group({
            accountNumber:['',Validators.compose([Validators.pattern('[0-9]*')])],
            firstName:['',Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')])],
            lastName:['',Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')])]
        });
    }

    search(){
        this.submitAttempt = true;

        if(this.calculateInterestSearchForm.valid){
            this.presentLoading();
            console.log(this.calculateInterestSearchForm.value);
        }
        else{
            alert("Not able to proccess your request. Try again");
        }
    }
    
    presentLoading(){
        let loader = this.loadingCtrl.create({
            content:"Loading....",
            duration: 3000
        });
        loader.present();
    }

}
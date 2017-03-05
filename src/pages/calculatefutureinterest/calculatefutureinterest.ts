import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'calculatefutureinterest-page',
    templateUrl: 'calculatefutureinterest.html'
})

export class CalculateFutureInterestPage{

    @ViewChild('interestSlides') interestSlides: any;

    interestSlideOne: FormGroup;
    interestSlideTwo: FormGroup;

    constructor(public navCtrl:NavController, public formBuilder: FormBuilder){}

    next(){
        this.interestSlides.slideNext();
    }

    back(){
        this.interestSlides.slidePrev();
    }
    
}
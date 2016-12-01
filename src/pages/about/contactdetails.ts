import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import {CallNumber} from 'ionic-native';

@Component({
  selector: 'page-contactdetails',
  templateUrl: 'contactdetails.html'
})
export class ContactDetails {
    item;
    constructor(public navCtrl: NavController,
        private params:NavParams){
        this.item = params.data.item;

    }

    callNumber(){
        console.log(this.item.phone);
        CallNumber.callNumber(this.item.phone, true)
          .then(() => console.log('Launched dialer!'))
          .catch(() => console.log('Error launching dialer'));

    }

}
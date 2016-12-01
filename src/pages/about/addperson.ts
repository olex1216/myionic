import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';


@Component({
  selector: 'page-addperson',
  templateUrl: 'addperson.html'
})
export class AddPerson {
    constructor(public navCtrl: NavController,
        private params:NavParams){

    }
}
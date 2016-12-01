// 添加照片
import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';

@Component({
  selector: 'page-addphoto',
  templateUrl: 'addphoto.html'
})
export class AddPhoto {
    constructor(public navCtrl: NavController,
        private params:NavParams){


    }
}
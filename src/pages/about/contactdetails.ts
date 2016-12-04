import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import {CallNumber} from 'ionic-native';
import { ActionSheetController } from 'ionic-angular';
@Component({
  selector: 'page-contactdetails',
  templateUrl: 'contactdetails.html'
})
export class ContactDetails {
    item;
    constructor(public navCtrl: NavController,
        private params:NavParams,
        public actionSheetCtrl: ActionSheetController){
        this.item = params.data.item;

    }

    callNumber(){
        console.log(this.item.phone);
        CallNumber.callNumber(this.item.phone, false)
          .then(() => console.log('Launched dialer!'))
          .catch(() => console.log('Error launching dialer'));

    }

    editMore(){
      let actionSheet = this.actionSheetCtrl.create({

            buttons: [
              {
                text: '删除好友',

                role: 'destructive',
                handler: () => {
                  console.log('Destructive clicked');
                }
              },{
                text: '设置备注和标签',

                handler: () => {
                  console.log('Archive clicked');
                }
              },{
                text: '联系方式',

                handler: () => {
                  console.log('Archive clicked');
                }
              },{
                 text: '拉入黑名单',
                 role: 'cancel',
                 handler: () => {
                   console.log('Cancel clicked');
                 }
               }
            ]
          });
          actionSheet.present();
    }

}
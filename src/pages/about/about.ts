import { Component } from '@angular/core';
import { NavController,ModalController,NavParams } from 'ionic-angular';
import {ContactDetails} from './contactdetails';
import {AddPerson} from './addperson';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  contacts;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    private params:NavParams) {
    this.contacts = [{"id":1,"name":"C罗","tag":"好友","location":"广东 深圳","phone":"15899971905"},
        {"id": 2,"name": "齐达内","tag":"同事","location":"广东 广州","phone": "15892157865"},
        {"id": 3,"name": "拉莫斯","tag":"同学","location":"北京","phone": "16859245682"},
        {"id": 4,"name": "厄齐尔","tag":"家人","location":"英国 伦敦","phone": "19565656339"},
        {"id": 5,"name": "莫拉塔","tag":"好友","location":"上海","phone": "12566668529"},
        {"id": 6,"name": "克罗斯","tag":"好友","location":"广东 深圳","phone": "12156349711"}]
  }


  itemClick(event,contact){
    //点击时加载相应的页面
      this.navCtrl.push(ContactDetails,{item:contact});
  }

  removeContact(contact){
    //删除联系人
    for (var i = 0; i < this.contacts.length; i++) {
      if(this.contacts[i]==contact) {
        this.contacts.splice(i,1);
      }
    }
    console.log("删除联系人");

  }

  addPerson(){
    this.navCtrl.push(AddPerson);
  }

}

import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { UserCenter } from '../contact/usercenter';
// import { ModalController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page


  // tab3Root: any = localStorage.getItem("logined")
  // == "true" ? UserCenter : ContactPage;

  @ViewChild('myTabs') tabRef: Tabs;
  ionViewDidEnter() {
    if(localStorage.getItem("logined") == "true") {
       this.tabRef.select(0);

    } else {
      this.tabRef.select(2);

    }
   }

   tab1Root: any = HomePage;
   tab2Root: any = AboutPage;
   tab3Root: any = UserCenter;

  constructor() {

  }

  // log(){
  //   let modal = this.modalCtrl.create(UserCenter);
  //   modal.present();
  // }


}

import { Component } from '@angular/core';

import { ContactPage } from './contact';

import {NavController,LoadingController,
  AlertController,ToastController,ModalController,ViewController,NavParams} from 'ionic-angular';
// import { ImagePicker } from 'ionic-native';

@Component({
  selector: 'page-usercenter',
  templateUrl: 'usercenter.html'
})

export class UserCenter{
  user;
  constructor(
  public navCtrl: NavController,
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public toastCtrl: ToastController,
  public modalCtrl: ModalController,
  public viewCtrl: ViewController,
  private params:NavParams,) {
    this.user = {};
    this.user.username="";
    this.user.password="";
    this.user.headface="assets/images/"+params.get('userId')+".jpg";
    this.user.email="";
    console.log('UserId', params.get('userId'));

    if(localStorage.getItem("logined") == "true") {
      //已经登录
      console.log("进入个人页面！");

      this.user.headface = "assets/images/"+
      localStorage.getItem("username")+".jpg";
    } else {
      //没有登录
      console.log("转到登录页面！");
      this.viewCtrl.dismiss();


      let modal = this.modalCtrl.create(ContactPage);
      modal.present();

    }
  }

    loginOut(){
          console.log("注销页面！");
        localStorage.removeItem("username");
        localStorage.removeItem("logined");
        // this.viewCtrl.dismiss();
        let modal = this.modalCtrl.create(ContactPage);

        modal.present();
    }

    updateHeadface(){
      console.log("update headface");
      // ImagePicker.getPictures().then((results) => {
      //   for (var i = 0; i < results.length; i++) {
      //      this.user.headface=results[i];
      //      //将图片上传到服务器..

      //   }
      // }, (err) => { console.log("Error getting image")});

    }



}




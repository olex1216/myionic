import { Component } from '@angular/core';
import { Register } from './register';
// import { UserCenter } from './usercenter';
import { TabsPage } from '../tabs/tabs';

import {NavController,LoadingController,
  AlertController,ToastController,ModalController,
  ViewController,NavParams} from 'ionic-angular';
// import { ImagePicker } from 'ionic-native';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage{
  user;

  constructor(
  public navCtrl: NavController,
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public toastCtrl: ToastController,
  public modalCtrl: ModalController,
  public viewCtrl: ViewController,
  private params: NavParams,) {
    this.user = {};
    this.user.username="";
    this.user.password="";
    this.user.headface="assets/images/5.jpg";
    this.user.email="";
  }

  login(){
    //验证窗口
    if(this.user.username == ""){

      let toast = this.toastCtrl.create({
            message: "输入的用户名格式不正确",
            position: 'top',
            duration: 3000,
          });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();

    }else {
      //Loading窗口
      let loader =this.loadingCtrl.create({
          content:"正在登录",
          spinner:"ios",
          duration:2000,

          });
          loader.present();

          if(this.user.password === "1") {
            //模拟登陆成功
            console.log("登录成功！");

            localStorage.setItem('username',this.user.username);
            localStorage.setItem('logined',"true");
            loader.dismiss();//登录进度条隐藏
            this.viewCtrl.dismiss();//当前页面隐藏

            let modal = this.modalCtrl.create(TabsPage ,{ userId: this.user.username });
            modal.present();

          } else {

            setTimeout(()=>{
              let toast = this.toastCtrl.create({
                    message: "登录失败",
                    position: 'top',
                    duration: 2000,
                  });
              toast.present();
            },3200);




          }
    }
  }

  // 打开注册窗口
  openRegisterPage(){
     let modal = this.modalCtrl.create(Register);
      modal.present();
   }


  // 用户上传头像
   // uploadImg(){
   //   ImagePicker.getPictures().then((results) => {
   //     for (var i = 0; i < results.length; i++) {
   //        this.user.headface=results[i];
   //        //将图片上传到服务器..

   //     }
   //   }, (err) => { console.log("Error getting image")});
   // }


}




import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AddPhoto } from './addphoto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    photos;
  constructor(public navCtrl: NavController) {
      this.photos = [{"photo":""}];

  }
  addPhoto(){
      //添加照片
      //   ImagePicker.getPictures().then((results) => {
      //     for (var i = 0; i < results.length; i++) {
      //        this.photos.headface=results[i];
      //        //将图片上传到服务器..

      //     }
      //   }, (err) => { console.log("Error adding photo")});
  }

}

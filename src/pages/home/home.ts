import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { AddPhoto } from './addphoto';
// import { ImagePicker } from 'ionic-native';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mySlideOptions;
video = document.querySelectorAll('video');


   // photos;
  constructor(public navCtrl: NavController,
   ) {
    this.mySlideOptions = {
        initialSlide: 1,
        loop: true
      };

  }


  addPhoto(){
    // ImagePicker.getPictures(
    //     function(results) {
    //         for (var i = 0; i < results.length; i++) {
    //             console.log('Image URI: ' + results[i]);
    //         }
    //     }, function (error) {
    //         console.log('Error: ' + error);
    //     }
    // );
      //添加照片
      //   ImagePicker.getPictures().then((results) => {
      //     for (var i = 0; i < results.length; i++) {
      //        this.photos.headface=results[i];
      //        //将图片上传到服务器..

      //     }
      //   }, (err) => { console.log("Error adding photo")});
  }

}

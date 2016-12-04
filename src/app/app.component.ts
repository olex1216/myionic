import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { Geolocation } from 'ionic-native';
import { LocalNotifications } from 'ionic-native';
@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.show();
      window.setTimeout(function () {
          Splashscreen.hide();
      }, 5000);
      // Splashscreen.hide();

      //获取地理位置信息
      Geolocation.getCurrentPosition({maximumAge:6000}).then((resp) => {
       // resp.coords.latitude
       // resp.coords.longitude
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
      }).catch((error) => {
        console.log('Error getting location');
      });

      //本地消息推送
      LocalNotifications.schedule({
         id:1,
         text: '您有一条新消息',
         at: new Date(new Date().getTime() + 3000),
      });
    });
  }
}

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { UserCenter } from '../pages/contact/usercenter';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPhoto } from '../pages/home/addphoto';
import { Register } from '../pages/contact/register';
import {ContactDetails} from '../pages/about/contactdetails';
import {AddPerson} from '../pages/about/addperson';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Register,
    ContactDetails,
    UserCenter,
    AddPerson,
    AddPhoto
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    Register,
    HomePage,
    TabsPage,
    ContactDetails,
    UserCenter,
    AddPerson,
    AddPhoto
  ],
  providers: []
})
export class AppModule {}

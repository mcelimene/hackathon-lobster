import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AuthPage } from '../pages/auth/auth';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home'; 
import { ConversationsPage } from '../pages/conversations/conversations';   
import { MessagesPage } from '../pages/messages/messages'; 
import { TabsPage } from '../pages/tabs/tabs';   
import { SigninPage } from '../pages/signin/signin';
import { AddMemberPage } from '../pages/add-member/add-member';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ConversationsPage,
    MessagesPage,
    HomePage,
    SigninPage,
    AuthPage,
    TabsPage,
    AddMemberPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AddMemberPage,
    ConversationsPage,
    MessagesPage,
    AuthPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

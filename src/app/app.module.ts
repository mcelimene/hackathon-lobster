import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AuthPage } from '../pages/authentication/auth/auth';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home'; 
import { ConversationsPage } from '../pages/conversations/conversations';   
import { MessagesPage } from '../pages/messages/messages'; 
import { TabsPage } from '../pages/tabs/tabs';   
import { SigninPage } from '../pages/authentication/signin/signin';
import { AddMemberPage } from '../pages/authentication/add-member/add-member';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMemberPage } from '../pages/authentication/add-member/add-member';
import { AddMember2Page } from '../pages/authentication/add-member2/add-member2';
import { AuthenticationPage } from '../pages/authentication/authentication';


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
    AddMemberPage,
    AddMember2Page,
    AuthenticationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AddMemberPage,
    AddMember2Page,
    ConversationsPage,
    MessagesPage,
    AuthPage,
    SigninPage,
    TabsPage,
    AuthenticationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}

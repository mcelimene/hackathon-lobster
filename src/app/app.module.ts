import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

<<<<<<< HEAD
import { ProfilPage } from '../pages/profil/profil';
import { AuthPage } from '../pages/auth/auth';
import { HomePage } from '../pages/home/home';
import { ConversationsPage } from '../pages/conversations/conversations';
import { MessagesPage } from '../pages/messages/messages';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { AddMemberPage } from '../pages/add-member/add-member';
=======
import { AboutPage } from '../pages/about/about';
import { AuthPage } from '../pages/authentication/auth/auth';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home'; 
import { ConversationsPage } from '../pages/conversations/conversations';   
import { MessagesPage } from '../pages/messages/messages'; 
import { TabsPage } from '../pages/tabs/tabs';   
import { SigninPage } from '../pages/authentication/signin/signin';
import { AddMemberPage } from '../pages/authentication/add-member/add-member';
>>>>>>> master

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { AddMember2Page } from '../pages/add-member2/add-member2';
import { DemandesPage } from '../pages/demandes/demandes';
import { RadarPage } from '../pages/radar/radar';

=======
import { AddMemberPage } from '../pages/authentication/add-member/add-member';
import { AddMember2Page } from '../pages/authentication/add-member2/add-member2';
import { AuthenticationPage } from '../pages/authentication/authentication';
>>>>>>> master


@NgModule({
  declarations: [
    MyApp,
    ProfilPage,
    ConversationsPage,
    MessagesPage,
    HomePage,
    SigninPage,
    AuthPage,
    TabsPage,
    AddMemberPage,
    AddMember2Page,
<<<<<<< HEAD
    DemandesPage,
    RadarPage
=======
    AuthenticationPage
>>>>>>> master
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
    ProfilPage,
    HomePage,
    AddMemberPage,
    AddMember2Page,
    ConversationsPage,
    MessagesPage,
    AuthPage,
    SigninPage,
    TabsPage,
<<<<<<< HEAD
    DemandesPage,
    RadarPage
=======
    AuthenticationPage
>>>>>>> master
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}

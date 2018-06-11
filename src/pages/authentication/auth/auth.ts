import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddMemberPage } from '../add-member/add-member';
import { SigninPage } from '../signin/signin';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

  register() {
    this.navCtrl.push(AddMemberPage);
  }

  connect() {
    this.navCtrl.push(SigninPage);
  }

}

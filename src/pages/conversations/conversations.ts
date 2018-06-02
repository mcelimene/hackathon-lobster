import { Component } from '@angular/core';
import { MessagesPage } from '../messages/messages';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConversationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  	selector: 'page-conversations',
  	templateUrl: 'conversations.html',
})
export class ConversationsPage {
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}


  	ionViewDidLoad() {
    	console.log('ionViewDidLoad ConversationsPage');
    	console.log('Chargement des conversations...');
      
  	}
      convs = [{Id:0, Name:'Charlotte', Age:18, Gender:"female", Img:"assets/imgs/logo.png", msg:"Salut!"},
              { Id:1, Name:'Juliette', Age:20, Gender:"female", Img:"assets/imgs/logo.png", msg:"Salut! Bien ?"},
              { Id:2, Name:'Marie', Age:22, Gender:"female", Img:"assets/imgs/logo.png", msg:"Salut! Bien ? Moi oui."}
      ];

    goToConv(conv: []){
      console.log(conv);
     // this.navCtrl.push(MessagesPage(conv));
    };
}

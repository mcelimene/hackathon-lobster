import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
}) 
export class MessagesPage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.name = navParams.get('name');
      this.id = navParams.get('id');
  	}
	
  	ionViewDidLoad() {
  	  	console.log('ionViewDidLoad MessagesPage');
  	} 

  	conv = [{Id:0, Name:'Charlotte', Age:18, Gender:"female", Img:"assets/imgs/logo.png", Msg:"Salut c'est charlotte.", Who:0},
  			{Id:0, Name:'Charline', Age:19, Gender:"female", Img:"assets/imgs/logo.png", Msg:"Enchanté ! ", Who:1},
  			{Id:0, Name:'Clémence', Age:20, Gender:"female", Img:"assets/imgs/logo.png", Msg:"Tu veux causer ?", Who:1},
  	];

  	goToProfile(id: int){  
  		console.log('dzeji');
  	}
}

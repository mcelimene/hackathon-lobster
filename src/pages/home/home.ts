import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { ConversationsPage } from '../conversations/conversations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  goToProfil() {
    	this.navCtrl.push(ProfilPage);
  }

	goToRadar() {
    	this.navCtrl.push('page-radar');
  }

	goToDemandes() {
    	this.navCtrl.push('page-demandes');
  }

  goToMessages() {
    	this.navCtrl.push(ConversationsPage);
  }


}

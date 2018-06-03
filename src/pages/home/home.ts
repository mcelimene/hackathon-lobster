import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  goToProfil() {
    	this.navCtrl.push('page-profil');
  }

	goToRadar() {
    	this.navCtrl.push('page-radar');
  }  	

	goToDemandes() {
    	this.navCtrl.push('page-demandes');
  }

  goToMessages() {
    	this.navCtrl.push('page-messages');
  }


}

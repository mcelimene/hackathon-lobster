import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

//Json de la bdd pour mon profils.
  items = [
  	'photo',
    'Ipersky',
    'Password',
    '23',
    'julienbraga@hotmail.fr',
    'homme',
    'femme ',
    'je suis un homme serieurs ',
    'j aime les annimaux',
    'jaime pas les con'
    
];

itemSelected(item: string) {

	//this.navCTRL.push("page-".item);

    //console.log("Selected Item", item);
}

}

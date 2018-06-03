import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  constructor(public navCtrl: NavController) {

  }

//Json de la bdd pour mon profils.
  items = [{

    pseudo:'Ipersky',
    passeword:'Password',
    age:'23',
    mail:'julienbraga@hotmail.fr',
    sexe:'homme',
    orientation:'femmes',
    description:'je suis un homme serieux ',
    aime:"j'aime les annimaux",
    aimepas:"je n'aime pas les con"

	//this.navCTRL.push("page-".item);

    //console.log("Selected Item", item);

}];

itemSelected(item: string) {
    console.log("Selected Item", item);

}

}

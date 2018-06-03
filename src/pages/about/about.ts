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
  items = [{

    pseudo:'Ipersky',
    mdp:'Password',
    age:'23',
    mail:'julienbraga@hotmail.fr',
    sexe:'homme',
    orientation:'femme ',
    description:'je suis un homme serieurs ',
    aime:'j aime les annimaux',
    aimepas:'jaime pas les con',
    philosophi:"Avant l'heur c'est deja l'heur a l'heur c'est l'heur apres l'heur tu degages " 

}];

itemSelected(item: string) {
    console.log("Selected Item", item);
}

}

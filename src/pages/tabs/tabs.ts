import { Component } from '@angular/core';

<<<<<<< HEAD
=======
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SigninPage } from '../authentication/signin/signin';
import { ConversationsPage } from '../conversations/conversations';
import { MessagesPage } from '../messages/messages';
import { AuthPage } from '../authentication/auth/auth';
>>>>>>> master
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';
import { AuthPage } from '../auth/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  profile = ProfilPage;
  auth = AuthPage;

  constructor() {

  }
}

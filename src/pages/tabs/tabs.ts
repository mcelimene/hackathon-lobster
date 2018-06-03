import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AuthPage } from '../auth/auth';
import { SigninPage } from '../signin/signin';
import { ConversationsPage } from '../conversations/conversations';
import { MessagesPage } from '../messages/messages';
import { AuthPage } from '../auth/auth';
import { HomePage } from '../home/home';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SigninPage;
  tab5Root = AuthPage;
  tab4Root = ConversationsPage;
  tab5Root = MessagesPage;
  tab6Root = AuthPage;


  constructor() {

  }
}

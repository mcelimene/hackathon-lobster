import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { AuthService } from '../../../services/auth.service';
import { AuthPage } from '../auth/auth';
import { AddMemberPage } from '../add-member/add-member';
import { AddMember2Page } from '../add-member2/add-member2';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage implements OnInit {
	public signinForm: FormGroup;
	public errorMessage: string;
  public isAuth: boolean = false;


  constructor(private formBuilder: FormBuilder,
  						private authService: AuthService,
  						private navCtrl: NavController){}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  signin(){
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.authService.signInUser(email, password).then(
      () => {
      	console.log('connecté');
        this.navCtrl.setRoot(HomePage);
        this.isAuth = true;
        //this.navCtrl.push(AuthPage, {
          //data: this.isAuth
        //});
      },
      (error) => {
        this.errorMessage = error;
        console.log(this.errorMessage);
      }
    );
  }


}

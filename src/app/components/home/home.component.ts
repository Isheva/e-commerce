import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/Account';
import { AccountsService } from 'src/app/services/accounts.service';
import { LoginService } from 'src/app/services/login.service';
import { UiService } from 'src/app/services/ui.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts: Account[] = []

  loginStatus: boolean;

  @Output() onAddAccount: EventEmitter<Account> = new EventEmitter();
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  GSM: string;
  password: string;
  passwordCheck: string;
  agreement: boolean = false;

  loginUsername: string;
  loginPassword: string;

  loggedUsers: Account[] = [];
  loggedUser: Account;

  isLogin: boolean = true;
  showLogin: boolean = true;
  
  constructor(private accountsService: AccountsService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.accountsService.getAccount().subscribe((accounts) => (this.accounts = accounts));
    this.loginService.getLogged().subscribe(loggedUsers => this.loggedUsers = loggedUsers);
  }

  switchLogin(){
    this.showLogin = !this.showLogin;
  }

  onLogOut(){
    this.isLogin = !this.isLogin;
  }

  onLogIn(){
    if (!this.loginUsername) {
      Swal.fire('Oops...', 'Please type your username!', 'error');
      return;
    }

    if (!this.loginPassword) {
      Swal.fire('Oops...', 'Please type your password!', 'error');
      return;
    }

    if(!this.findByUsernameAndPassword(this.loginUsername, this.loginPassword)){
      Swal.fire('Oops...', 'The username or password is incorrect!', 'error');
      return;
    }

    this.loggedUser = {
      username: this.loginUsername,
      photoSrc: this.accounts.find(account => account.username === this.loginUsername && account.password === this.loginPassword)!.photoSrc,
      firstName: this.accounts.find(account => account.username === this.loginUsername && account.password === this.loginPassword)!.firstName,
      lastName: this.accounts.find(account => account.username === this.loginUsername && account.password === this.loginPassword)!.lastName,
      gender: this.accounts.find(account => account.username === this.loginUsername && account.password === this.loginPassword)!.gender,
      email: this.accounts.find(account => account.username === this.loginUsername && account.password === this.loginPassword)!.email,
      GSM: this.accounts.find(account => account.username === this.loginUsername && account.password === this.loginPassword)!.GSM,
      password: this.loginPassword,
      agreement: this.accounts.find(account => account.username === this.loginUsername && account.password === this.loginPassword)!.agreement
  };

    this.isLogin = false;
    console.log("hiiiiiiiiiii" + this.loggedUser.email + this.loggedUser.username)
    this.loginService.addLogged(this.loggedUser).subscribe(() => (this.loggedUsers.push(this.loggedUser)));

    this.loginUsername = '';
    this.loginPassword = '';
  }

  onSignUp() {
    if (!this.username) {
      Swal.fire('Oops...', 'Please type your username!', 'error');
      return;
    } if(this.findByUsername(this.username)){
      Swal.fire('Oops...', 'There is already a user with this username!', 'error');
      return;
    }

    if (!this.firstName) {
      Swal.fire('Oops...', 'Please type your first name!', 'error');
      return;
    }

    if (!this.lastName) {
      Swal.fire('Oops...', 'Please type your last name!', 'error');
      return;
    }

    if (!this.gender) {
      Swal.fire('Oops...', 'Please select your gender!', 'error');
      return;
    } else if (this.gender != "M" && this.gender != "F" && this.gender != "m" && this.gender != "f" ){
      Swal.fire('Oops...', 'Please select either M or F for gender!', 'error');
      return;
    }

    if (!this.email) {
      Swal.fire('Oops...', 'Please type your email!', 'error');
      return;
    } else if (!this.validateEmail(this.email)){
      Swal.fire('Oops...', 'Non-existent email!', 'error');
      return;
    }


    if (!this.GSM) {
      Swal.fire('Oops...', 'Please type your GSM!', 'error');
      return;
    }

    if (!this.password) {
      Swal.fire('Oops...', 'Please type your password!', 'error');
      return;
    } else if ( this.password.length < 8 ) {
      Swal.fire('Oops...', 'Your password should be at least 8 characters!', 'error');
      return;
    } else {
        for (let i = this.password.length - 1; i >= 0; i--) {
          const d = this.password.charCodeAt(i);
          if ((d < 48 || d > 57 ) && (d < 65 || d > 90) && (d < 97 || d > 122)){
            Swal.fire('Oops...', 'Your password should contain only letters and digits!', 'error');
            return;
          }
        }
    }

    if (!this.passwordCheck || !(this.passwordCheck == this.password)){
      Swal.fire('Oops...', 'Password confirmation is unsuccesful!', 'error');
      return;
    } 
  
    if(!this.agreement){
      Swal.fire('Oops...', 'You can not finish your registration without agreeing with our terms and conditions!', 'error');
      return;
    }

    const newAccount = {
      username: this.username,
      photoSrc: "./assets/plainAvatar.png",
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      email: this.email,
      GSM: this.GSM,
      password: this.password,
      agreement: this.agreement
    };

    this.accountsService.addAccount(newAccount).subscribe((newAccount) => (this.accounts.push(newAccount)));
   
    this.isLogin = true;
  }

  findByUsername(username: string): boolean{
    if (this.accounts.find(account => account.username === username)){
      return true;
    }else return false;
  }

  findByUsernameAndPassword(username: string, password: string): boolean{
    if (this.accounts.find(account => account.username === username && account.password === password)){
      return true;
    }else return false;
  }

  validateEmail(email: string) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
  }
}

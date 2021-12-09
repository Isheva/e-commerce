import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Account';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  loggedAccounts: Account[] = [];
  loggedUser: { username: string | undefined; firstName: string | undefined; lastName: string | undefined; gender: string | undefined; email: string | undefined; GSM: string | undefined; password: string | undefined; agreement: boolean | undefined; };

  showLoggedUser: boolean = false;
  showNewUser: boolean = false;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accountsService.getLogging().subscribe((loggedUser) => (this.loggedAccounts = loggedUser));
  }

  getLoggedUser(){
    this.showNewUser = false;
    this.showLoggedUser = true;
    this.loggedUser = {
      username: this.loggedAccounts.slice(-1).pop()?.username,
      firstName: this.loggedAccounts.slice(-1).pop()?.firstName,
      lastName: this.loggedAccounts.slice(-1).pop()?.lastName,
      gender: this.loggedAccounts.slice(-1).pop()?.gender,
      email: this.loggedAccounts.slice(-1).pop()?.email,
      GSM: this.loggedAccounts.slice(-1).pop()?.GSM,
      password: this.loggedAccounts.slice(-1).pop()?.password,
      agreement: this.loggedAccounts.slice(-1).pop()?.agreement
    };
    console.log(this.loggedUser);
    return this.loggedUser;
  }

  setLoggedUser(){
    this.showLoggedUser = false;
    this.showNewUser = true;
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Account } from '../Account';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private apiUrl = 'http://localhost:5000/accounts'
  private apiUrlLogging = 'http://localhost:5000/logged-accounts'
  

  constructor(private http:HttpClient) { }

  getAccount() : Observable<Account[]>{
    return this.http.get<Account[]>(this.apiUrl)
  }

  getLogging() : Observable<Account[]>{
    return this.http.get<Account[]>(this.apiUrlLogging)
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl, account, httpOptions);
  }

  addLogging(account: { username: string; firstName: string | undefined; lastName: string | undefined; gender: string | undefined; email: string | undefined; GSM: string | undefined; password: string; agreement: boolean | undefined; }): Observable<Account> {
    return this.http.post<Account>(this.apiUrlLogging, account, httpOptions);
  }
 
  updateAccount(account: Account): Observable<Account> {
    const url = `${this.apiUrl}/${account.id}`;
    return this.http.put<Account>(url, account, httpOptions);
  }

  updateLoggedAccount(account: Account): Observable<Account> {
    const url = `${this.apiUrlLogging}/${account.id}`;
    return this.http.put<Account>(url, account, httpOptions);
  }

  deleteLogging (account: Account): Observable<Account> {
    const url = `${this.apiUrlLogging}/${account.id}`;
    return this.http.delete<Account>(url);
  }
}

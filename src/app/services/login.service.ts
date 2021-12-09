import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Account } from '../Account';
import { Products } from '../Products';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  // private loggedAccountSource = new Subject<Account>();
  // currentLoggedUserStatus = this.loggedAccountSource.asObservable();

  // constructor() { }

  // changeLoggedUserStatus(loggedUserStatus: Account){
    
  //   this.loggedAccountSource.next(loggedUserStatus);
    
  // }

  private apiUrlLogged = 'http://localhost:5000/logged-accounts';

  constructor(private http:HttpClient) { }

  getLogged() : Observable<[]>{
    return this.http.get<[]>(this.apiUrlLogged)
  }

  addLogged(logged: any): Observable<any> {
    return this.http.post<any>(this.apiUrlLogged, logged, httpOptions);
  }

  deleteLogged(logged: any): Observable<any> {
    const url = `${this.apiUrlLogged}/${logged.id}`;
    return this.http.delete<any>(url);
  }
}

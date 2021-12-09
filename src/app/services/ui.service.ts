import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showLogin: boolean = false;
  private subject = new Subject<any>();


  constructor() { }


  toggleLogin(): void {
    this.showLogin = !this.showLogin;
    this.subject.next(this.showLogin);
  }

  toggleSignUp(): void {
    this.showLogin = !this.showLogin;
    this.subject.next(this.showLogin);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}

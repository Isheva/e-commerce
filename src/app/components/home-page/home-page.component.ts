import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  emailForDiscounts: string;

  constructor() { }

  ngOnInit(): void {
  }

  validateEmail(email: string) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
  }

  confirm(){
    if (!this.emailForDiscounts) {
      Swal.fire('Oops...', 'Please type your email!', 'error');
      return;
    } else if (!this.validateEmail(this.emailForDiscounts)){
      Swal.fire('Oops...', 'Non-existent email!', 'error');
      return;
    }
    this.emailForDiscounts = '';
  }
}

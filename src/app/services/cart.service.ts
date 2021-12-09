import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Products } from '../Products';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:5000/cart'


  constructor(private http:HttpClient) { }

  getCart() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrl)
}

deleteCart(product: Products): Observable<Products> {
  const url = `${this.apiUrl}/${product.id}`;
  return this.http.delete<Products>(url);
}

updateCart(product: Products): Observable<Products> {
  const url = `${this.apiUrl}/${product.id}`;
  return this.http.put<Products>(url, product, httpOptions);
}

addCart(product: Products): Observable<Products> {
  return this.http.post<Products>(this.apiUrl, product, httpOptions);
}

}

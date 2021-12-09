import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Products';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrlDress = 'http://localhost:5000/dresses'
  private apiUrlCostume = 'http://localhost:5000/costumes'
  private apiUrlSkirts = 'http://localhost:5000/skirts'
  private apiUrlBlazers = 'http://localhost:5000/blazers'
  private apiUrlWomensAccessorie = 'http://localhost:5000/womens-accessories'


 //// MENS 
  private apiUrlSuit = 'http://localhost:5000/suits'
  private apiUrlHoodie = 'http://localhost:5000/hoodies'
  private apiUrlShirt = 'http://localhost:5000/shirts'
  private apiUrlKnitwear = 'http://localhost:5000/knitwears'
  private apiUrlAccessorie = 'http://localhost:5000/accessories'

  constructor(private http:HttpClient) { }

  getDresses() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlDress)
  }

  getCostumes() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlCostume)
  }

  getSkirts() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlSkirts)
  }

  getBlazers() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlBlazers)
  }

  getWomensAccessories() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlWomensAccessorie)
  }

//// MENS
  getSuits() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlSuit)
  }

  getHoodies() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlHoodie)
  }

  getShirts() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlShirt)
  }

  getKnitwears() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlKnitwear)
  }

  getAccessories() : Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlAccessorie)
  }
}

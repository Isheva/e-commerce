import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-men',
  templateUrl: './products-men.component.html',
  styleUrls: ['./products-men.component.css']
})
export class ProductsMenComponent implements OnInit {
  cart: Products[] = [];
  suits: Products[] = [];
  hoodies: Products[] = [];
  shirts: Products[] = [];
  knitwears: Products[] = [];
  accessories: Products[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => (this.cart = cart));
    this.productsService.getSuits().subscribe((suits) => (this.suits = suits));
    this.productsService.getHoodies().subscribe((hoodies) => (this.hoodies = hoodies));
    this.productsService.getShirts().subscribe((shirts) => (this.shirts = shirts));
    this.productsService.getKnitwears().subscribe((knitwears) => (this.knitwears = knitwears));
    this.productsService.getAccessories().subscribe((accessories) => (this.accessories = accessories));
  }


  addProduct(newProduct: Products){
    if(this.cart.find(cart => cart.name === newProduct.name)){
      const oldProductIndex = this.cart.findIndex(cart => cart.name === newProduct.name);
    
      this.cart[oldProductIndex].amount!++;
      this.cart[oldProductIndex].price = this.cart[oldProductIndex].price + this.cart[oldProductIndex].pricePerOne!;
      this.cartService.updateCart(this.cart[oldProductIndex]).subscribe();

    } else {
      newProduct.pricePerOne = newProduct.price;
      newProduct.amount = 1;
      this.cartService.addCart(newProduct).subscribe((newProduct) => (this.cart.push(newProduct)));
    }
  }

}

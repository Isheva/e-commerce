
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/Products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Products[] = [];
  @Input() total: number = 0;
  viewTotal: boolean = false;
  emptyCart: boolean = false;

   constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => (this.cart = cart));
  }

  deleteProduct(cart: Products){
      cart.amount = 0;
      cart.price = 0;
      this.cartService.updateCart(cart).subscribe();
      this.sumTotal();
    this.cartService
      .deleteCart(cart)
      .subscribe(
      () => this.cart = this.cart.filter(t => t.name !== cart.name));
  }

  increaseAmount(cart: Products){
    cart.amount!++;
    cart.price = cart.price! + cart.pricePerOne!;
    this.cartService.updateCart(cart).subscribe();
    this.sumTotal();
  }

  decreaseAmount(cart: Products){
    if(cart.amount! - 1 <= 0){
      cart.amount!--;
      cart.price = cart.price! - cart.pricePerOne!;
      this.cartService.updateCart(cart).subscribe();
      this.sumTotal();
    this.cartService
      .deleteCart(cart)
      .subscribe(
      () => this.cart = this.cart.filter(t => t.name !== cart.name));
    }else {
      cart.amount!--;
      cart.price = cart.price! - cart.pricePerOne!;
      this.cartService.updateCart(cart).subscribe();
      this.sumTotal();
    }
  }
  
  sumTotal () {
    this.total = 0;
    this.viewTotal = true;
    if(!this.cart.length){
      this.emptyCart = true;
      this.total = 0
      return;
    }else {
    for (let i = 0; i < this.cart.length; i++){
      this.total = this.total + this.cart[i].price;
    }
    return this.total;
  }
  }

  checkOut(){
    if(!this.cart.length){
      this.emptyCart = true;
    }
  }

}

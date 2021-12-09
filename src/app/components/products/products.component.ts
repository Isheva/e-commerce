import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/Products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  cart: Products[] = [];
  dresses: Products[] = [];
  costumes: Products[] = [];
  skirts: Products[] = []
  blazers: Products[] = []
  accessories: Products[] = []

  total: number = 0;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getCart().subscribe((cart) => (this.cart = cart));
    this.productsService.getDresses().subscribe((dresses) => (this.dresses = dresses));
    this.productsService.getCostumes().subscribe((costumes) => (this.costumes = costumes));
    this.productsService.getSkirts().subscribe((skirts) => (this.skirts = skirts));
    this.productsService.getBlazers().subscribe((blazers) => (this.blazers = blazers));
    this.productsService.getWomensAccessories().subscribe((accessories) => (this.accessories = accessories));
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
    this.total = this.total + newProduct.price;
    console.log(this.total);
  }
}

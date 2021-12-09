import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Products } from 'src/app/Products';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() newProduct: Products;
  faTimes = faTimes;

  @Output() onDeleteProduct: EventEmitter<Products> = new EventEmitter();
  @Output() onIncreaseAmount: EventEmitter<Products> = new EventEmitter();
  @Output() onDecreaseAmount: EventEmitter<Products> = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void { 
  }

  onDelete(newProduct: any){ 
    this.onDeleteProduct.emit(newProduct);
  }

  onIncrease(newProduct: any){
    this.onIncreaseAmount.emit(newProduct);
  }

  onDecrease(newProduct: any){
    this.onDecreaseAmount.emit(newProduct);
  }

}

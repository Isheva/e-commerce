import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { ProductsComponent } from '../../products/products.component';

@Component({
  selector: 'app-blazers',
  templateUrl: './blazers.component.html',
  styleUrls: ['./blazers.component.css']
})
export class BlazersComponent implements OnInit {
  @Input() blazer: Products;

  constructor(private products: ProductsComponent) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newProduct = {
      type: this.blazer.type,
      name: this.blazer.name,
      currency: this.blazer.currency,
      price: this.blazer.price,
      src: this.blazer.src
    }

    this.products.addProduct(newProduct);
  }

  stars = ['one','two','three', 'four'];
  border_stars = ['one'];

  unstar(){
    if (this.border_stars.length < 5){
      this.border_stars.push("more");
    }
    this.stars.pop();
  }

  star(){
    if (this.stars.length < 5){
      this.stars.push("more");
    }
    this.border_stars.pop();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { ProductsComponent } from '../../products/products.component';

@Component({
  selector: 'app-skirts',
  templateUrl: './skirts.component.html',
  styleUrls: ['./skirts.component.css']
})
export class SkirtsComponent implements OnInit {
  @Input() skirt: Products;

  constructor(private products: ProductsComponent) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newProduct = {
      type: this.skirt.type,
      name: this.skirt.name,
      currency: this.skirt.currency,
      price: this.skirt.price,
      src: this.skirt.src
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

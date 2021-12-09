import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { ProductsMenComponent } from '../../products-men/products-men.component';

@Component({
  selector: 'app-knitwears',
  templateUrl: './knitwears.component.html',
  styleUrls: ['./knitwears.component.css']
})
export class KnitwearsComponent implements OnInit {
  @Input() knitwear: Products;

  constructor(private products: ProductsMenComponent) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newProduct = {
      type: this.knitwear.type,
      name: this.knitwear.name,
      currency: this.knitwear.currency,
      price: this.knitwear.price,
      src: this.knitwear.src
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

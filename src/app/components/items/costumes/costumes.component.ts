import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { ProductsComponent } from '../../products/products.component';

@Component({
  selector: 'app-costumes',
  templateUrl: './costumes.component.html',
  styleUrls: ['./costumes.component.css']
})
export class CostumesComponent implements OnInit {
  @Input() costume: Products;

  constructor(private products: ProductsComponent) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newProduct = {
      type: this.costume.type,
      name: this.costume.name,
      currency: this.costume.currency,
      price: this.costume.price,
      src: this.costume.src
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

import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { ProductsMenComponent } from '../../products-men/products-men.component';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  @Input() accessorie: Products;

  constructor(private products: ProductsMenComponent) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newProduct = {
      type: this.accessorie.type,
      name: this.accessorie.name,
      currency: this.accessorie.currency,
      price: this.accessorie.price,
      src: this.accessorie.src
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

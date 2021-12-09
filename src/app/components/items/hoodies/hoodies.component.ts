import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { ProductsMenComponent } from '../../products-men/products-men.component';
import { ProductsComponent } from '../../products/products.component';

@Component({
  selector: 'app-hoodies',
  templateUrl: './hoodies.component.html',
  styleUrls: ['./hoodies.component.css']
})
export class HoodiesComponent implements OnInit {
  @Input() hoodie: Products;

  constructor(private products: ProductsMenComponent) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newProduct = {
      type: this.hoodie.type,
      name: this.hoodie.name,
      currency: this.hoodie.currency,
      price: this.hoodie.price,
      src: this.hoodie.src
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

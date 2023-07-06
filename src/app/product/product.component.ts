import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

}
export interface Product {
  
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
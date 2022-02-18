import { Component, OnInit } from '@angular/core';
import { Product } from "../../core/models/product.model";
import { ProductsService } from "../../core/services/products/products.service";
@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.scss']
})
export class ListProductoComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProduct()
  }

  clickProduct(id: string) {
    console.log('product');
    console.log(id);
  }

  fetchProduct(){
    this.productsService.getAllProducts()
    .subscribe(productsss => {
      this.products = productsss;
    })
  }

}

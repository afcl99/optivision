import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from "./../../../core/services/products/products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = []
  displayedColumns: string[] =['id', 'title', 'price', 'actions']

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts(){
    console.log("list product")
    this.productService.getAllProducts()
    .subscribe(productss => {
      this.products = productss;
    })
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id)
    .subscribe(rta => {
      console.log("si elimine")
    })
  }

}

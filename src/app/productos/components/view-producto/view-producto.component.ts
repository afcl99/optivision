import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from "../../../core/models/product.model";
import { ProductsService } from "../../../core/services/products/products.service";
@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.scss']
})
export class ViewProductoComponent implements OnInit {

  products: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params["id"];
      this.fetchProduct(id);
      //this.product = this.productsService.getProducts(id)
    })
    console.log("aqui entre en le view producto ")
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProduct(id:number){
    this.productsService.getProduct(id)
    .subscribe(productsss => {
      this.products =productsss;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from "../../core/models/product.model";
import { ProductsService } from "../../core/services/products/products.service";
@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.scss']
})
export class ViewProductoComponent implements OnInit {

  product: Product [] = [];

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
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProduct(id:string){
    this.productsService.getProducts(id)
    .subscribe(productsss => {
      //this.product = productsss; no se como declarar para que me traiga solo un objeto
    })
  }

}

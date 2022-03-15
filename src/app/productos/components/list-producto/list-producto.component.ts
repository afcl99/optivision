import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from "../../../core/models/product.model"
import { ProductsService } from "../../../core/services/products/products.service";
import { CartService } from "./../../../core/services/cart/cart.service";

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.scss'],
})
export class ListProductoComponent implements OnInit {
  products: Product[]=[];

  /* @Input() product: Product; */
  @Output() productClecked: EventEmitter<any> = new EventEmitter();

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.fetchProduct()
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  addCart(product:Product){
    this.cartService.addCart(product)
  }

   fetchProduct(){
    this.productsService.getAllProducts()
    .subscribe((productsss) => {
      this.products = productsss;
    })
  }
}



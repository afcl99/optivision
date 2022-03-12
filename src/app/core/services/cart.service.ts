import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs";

import { Product } from "./../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  car$ = this.cart.asObservable();

  constructor() { }

  addCart(product:Product){
    this.products.push(product)
    console.log(product)
    this.cart.next(this.products);
  }
}

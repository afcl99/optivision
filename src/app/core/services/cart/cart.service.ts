import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs";

import { Product } from "./../../models/product.model";
import { environment } from "./../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  car$ = this.cart.asObservable();

  constructor(private http: HttpClient) { }

  addCart(product:Product){
    this.products.push(product)
    console.log(product)
    this.cart.next(this.products);
  }

  getProduct(id: number){
    return this.http.get<Product>(`${environment.url_api}/producto/${id}`);
  }

  getClient(id: number){
    /* return this.http.get<Client>(`${environment.url_api}cliente/identificacion/${id}`); */
  }
}

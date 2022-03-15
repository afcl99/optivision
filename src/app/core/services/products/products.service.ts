import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Product } from "./../../models/product.model";
import { environment } from "./../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${environment.url_api}producto/listar`);
  }
  getProduct(id: number){
    return this.http.get<Product>(`${environment.url_api}/${id}`);
  }
  createProduct(product: Product){
    return this.http.post(`${environment.url_api}/guardar`, product);
  }
  updateProduct(id: number, changes: Partial<Product>){
    return this.http.put(`${environment.url_api}/actualizar/${id}`, changes)
  }
  deleteProduct(id: number){
    return this.http.delete(`${environment.url_api}/eliminar/${id}`)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from "../../core/services/products/products.service";
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss']
})
export class AddProductoComponent implements OnInit {

  form = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
  }
  createProduct(){
    const newProdcut: Product = {
      id: '333',
      title: 'erewrwe',
      image: 'dfsf',
      price: 3444,
      description: "dsfs"
    }
    this.productsService.createProduct(newProdcut)
      .subscribe(productCreated => {
        console.log(productCreated);
      })
  }

}

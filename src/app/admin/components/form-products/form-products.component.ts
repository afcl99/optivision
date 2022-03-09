import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { Product } from "./../../../core/models/product.model";
import { ProductsService } from "./../../../core/services/products/products.service";
import { MyValidators } from "./../../../utilis/validators";

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.scss']
})
export class FormProductsComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private productsService:ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    console.log("entre save", this.form.value)
    event.preventDefault();
    //if (this.form.valid){
      const product: Product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      })
    //}
  }
  private buildForm(){
    this.form = this.formBuilder.group({
      id: [, [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      referencia: ['', [Validators.required]],
      materiarl: ['', [Validators.required]],
      price: [, [Validators.required, MyValidators.isPriceValid]],
      image: ''
    })
  }

  get priceField(){
    return this.form.get('price');
  }

}

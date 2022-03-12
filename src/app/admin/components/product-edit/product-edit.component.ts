import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Product } from "./../../../core/models/product.model";
import { ProductsService } from "./../../../core/services/products/products.service";
import { MyValidators } from "./../../../utilis/validators";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private productsService:ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params["id"];
      console.log(this.id)
      this.productsService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product)
      })
    });
  }

  saveProduct(event: Event){
    console.log("entre save", this.form.value)
    event.preventDefault();
    //if (this.form.valid){
      const product: Product = this.form.value;
      console.log("actualizar ",this.id)
      this.productsService.updateProduct(this.id, product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      })
    //}
  }
  private buildForm(){
    this.form = this.formBuilder.group({
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

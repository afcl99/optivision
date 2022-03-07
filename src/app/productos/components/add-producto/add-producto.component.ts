import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from "../../../core/services/products/products.service";
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss']
})
export class AddProductoComponent implements OnInit {

  form = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault(); //para evitar que recargue la pagina
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.route.navigate(['../list-producto/list-producto.component.ts'])
      })
    }
  }

  private  buildForm(){
    this.form = this.formBuilder.group ({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      image: [''],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }
}

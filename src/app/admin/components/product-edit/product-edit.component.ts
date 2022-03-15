import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


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
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService:ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storage: AngularFireStorage
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
    if (this.form.valid){
      console.log("entre save valid", this.form.value)
      const product: Product = this.form.value;
      console.log("actualizar ",this.id)
      this.productsService.updateProduct(this.id, product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      })
    }
  }
  uploadFile(event: any) {
    const file = event.target.files[0];
    const name = 'image';
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }
  private buildForm(){
    this.form = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      id: [, Validators.required],
      image: [''],
      marca: ['', [Validators.required]],
      materiarl: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      price: [, [Validators.required, MyValidators.isPriceValid]],
      referencia: ['', [Validators.required]],
    })
  }

  get priceField(){
    return this.form.get('price');
  }
}

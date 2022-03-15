import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utilis/validators';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class OrderComponent implements OnInit {

  products$: Product[];
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    this.buildForm();
    this.cartService.car$.subscribe((res)=>{
      this.products$ = res;
      console.log(this.products$)
    });
    console.log(this.products$)
   }

  ngOnInit(): void {

  }

  searchDocument(){
    console.log("searchDocument")
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      referencia: ['', [Validators.required]],
      material: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utilis/validators';
import { ClientsService } from "./../../../core/services/clients/clients.service";
import { Client } from 'src/app/core/models/client.model';



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
  id: number;
  client: Client;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private clientService: ClientsService
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

  searchDocument(event: Event){
    this.id = this.form.get('id').value
    this.clientService.getClientByIdentificacion(this.id)
    .subscribe(clients =>
      this.client = clients)
      console.log(this.client)
      if(this.client.id != -1){
        this.form.patchValue({
          identificacion: this.client.identificacion,
          nombres: this.client.nombres,
          apellidos: this.client.apellidos,
          telefono: this.client.telefono,
          direccion: this.client.direccion
        });
      }else{
        this.form.patchValue({
          identificacion: "",
          nombres: "",
          apellidos: "",
          telefono: "",
          direccion: ""
        });
      }

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

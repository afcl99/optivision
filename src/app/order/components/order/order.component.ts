import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Product[];

  constructor(
    private cartService: CartService
  ) {
    this.cartService.car$.subscribe((res)=>{
      this.products$ = res;
      console.log(this.products$)
    });
    console.log(this.products$)
   }

  ngOnInit(): void {
  }

}

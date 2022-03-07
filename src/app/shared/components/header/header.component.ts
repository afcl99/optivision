import { Component, OnInit } from '@angular/core';

import { map } from "rxjs/operators";

import { CartService } from "./../../../core/services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total = 0;

  constructor(
    private cartService: CartService
  ) {
    this.cartService.car$.subscribe(products => {
      console.log(this.total)
      this.total = products.length;
    })
  }

  ngOnInit(): void {
  }

}

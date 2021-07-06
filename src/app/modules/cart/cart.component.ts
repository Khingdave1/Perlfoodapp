import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  counter: number = 1;
  yes: any;


  constructor() { }

  ngOnInit(): void {
    // this.yes = document.querySelectorAll('.decrease')
    // this.yes.forEach((r: any) => {
    //   console.log(r)
    // });
  }


  increment() {
    this.counter += 1;
  }

  // Decrease Product Quantity
  decrement() {
    this.counter -= 1;
  }

}

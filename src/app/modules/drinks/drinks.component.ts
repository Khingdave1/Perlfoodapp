import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  drinksProduct: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Getting all Dispatched Riders from Firebase
    this.productService.getDrinksProduct("Yellow Chillies").subscribe((dp: any) => {
      this.drinksProduct = []
      dp.forEach((i: any) => {
        let item = i.payload.doc.data() as Product
        item.id = i.payload.doc.id
        this.drinksProduct.push(item)
      });

      console.log(this.drinksProduct)
    })
  }
}

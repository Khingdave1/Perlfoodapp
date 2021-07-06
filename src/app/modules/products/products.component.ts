import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {

  @Input("productData") public products: any; // Products from each categories components

  @ViewChild('productDetails') productDetails: ElementRef;
  @ViewChild('productImage') productImage: ElementRef;

  currentProduct: any;
  pdModal: any;
  counter: number;

  totalPrice: any;

  constructor(private productService: ProductService, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.counter = 1
    // Getting all Products from Firebase
    // this.productService.getProducts().subscribe((p: any) => {
    //   this.products = []
    //   p.forEach((i: any) => {
    //     let item = i.payload.doc.data() as Product
    //     item.id = i.payload.doc.id
    //     this.products.push(item)
    //   })
    // })
    // Click Outside to close element
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.productDetails.nativeElement.contains(e.target)
      let y = !this.productImage.nativeElement.contains(e.target)
      if (x && y) {
        this.pdModal = false;
      }
    });
  }


  // Show Product Details
  showProductDetails(product: any) {
    this.currentProduct = product

    this.pdModal = !this.pdModal

    this.totalPrice = this.currentProduct.amount * this.counter
  }

  // Increase Product Quantity
  increment() {
    this.counter += 1;
  }

  // Decrease Product Quantity
  decrement() {
    this.counter -= 1;
  }

}

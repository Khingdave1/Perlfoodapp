import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private db: AngularFirestore) { }

  collectionPath = this.db.collection('products')
  collectionName = 'products'
  drinksProduct: any;

  // Get all Products
  getProducts() {
    return this.collectionPath.snapshotChanges()
  }

  // Get all Drinks
  getDrinksProduct(productId: string) {
    this.drinksProduct = this.db.collection(this.collectionName, ref => ref.where('title', "==", productId)).snapshotChanges()
    return this.drinksProduct
  }
}

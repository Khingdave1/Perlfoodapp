import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ContinentalComponent } from 'src/app/modules/continental/continental.component';
import { AfricanComponent } from 'src/app/modules/african/african.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { AdslideComponent } from 'src/app/modules/adslide/adslide.component';
import { DrinksComponent } from 'src/app/modules/drinks/drinks.component';
import { PastriesComponent } from 'src/app/modules/pastries/pastries.component';
import { GroceriesComponent } from 'src/app/modules/groceries/groceries.component';
import { CartComponent } from 'src/app/modules/cart/cart.component';
import { AccountComponent } from 'src/app/modules/account/account.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContinentalComponent,
    AfricanComponent,
    GroceriesComponent,
    DrinksComponent,
    PastriesComponent,
    ProductsComponent,
    AdslideComponent,
    CartComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ProductsComponent,
    AdslideComponent
  ]
})
export class DefaultModule { }

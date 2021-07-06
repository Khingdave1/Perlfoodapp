import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AccountComponent } from './modules/account/account.component';
import { AfricanComponent } from './modules/african/african.component';
import { CartComponent } from './modules/cart/cart.component';
import { ContinentalComponent } from './modules/continental/continental.component';
import { DrinksComponent } from './modules/drinks/drinks.component';
import { GroceriesComponent } from './modules/groceries/groceries.component';
import { HomeComponent } from './modules/home/home.component';
import { PastriesComponent } from './modules/pastries/pastries.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent, },
      { path: 'continental', component: ContinentalComponent },
      { path: 'african', component: AfricanComponent },
      { path: 'groceries', component: GroceriesComponent },
      { path: 'drinks', component: DrinksComponent },
      { path: 'pastries', component: PastriesComponent },
      { path: 'cart', component: CartComponent },
      { path: 'account', component: AccountComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

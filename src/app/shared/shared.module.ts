import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from '../modules/signin/signin.component';
import { SignupComponent } from '../modules/signup/signup.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    AuthenticationComponent
  ]
})
export class SharedModule { }

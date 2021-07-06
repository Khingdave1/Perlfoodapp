import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide: boolean = true;
  subscriptionType: number = 2;
  isSignedin: boolean = false;

  constructor(private firebaseService: FirebaseService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    if (localStorage.getItem('id') !== null) {
      this.isSignedin = true
    } else {
      this.isSignedin = false
    }

  }

  // Form initialization and validation
  signupForm: FormGroup = this.formBuilder.group({
    name: ['', { validators: [Validators.required], updateOn: "change" }],
    email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
    password: ['', { validators: [Validators.required, Validators.minLength(8)], updateOn: "change" }]
  })

  async signup() {
    if (this.signupForm.invalid) {
      return
    }

    let payload = {
      emailAddress: this.signupForm.value.email,
      name: this.signupForm.value.name,
      subscriptionType: this.subscriptionType,
      password: this.signupForm.value.password
    }


    await this.firebaseService.createUser(payload.emailAddress, payload.password, payload)

    if (this.firebaseService.isLogggedIn === true) {
      this.isSignedin = true

      // Reload page
      window.location.reload()
    }


  }

}

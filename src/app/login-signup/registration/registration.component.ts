import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  user = {
    fname: '',
    lname: '',
    phone: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit(form: NgForm) {
    // Handle form submission
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  user: User = new User();

  constructor() {}

  onSubmit() {
    // Your registration logic here
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.scss']
})
export class EditInformationComponent {
  customer = {
    fname: '',
    lname:'',
    email: '',
    phone: ''
  };

  onSubmit() {
    // Handle form submission
  }
}

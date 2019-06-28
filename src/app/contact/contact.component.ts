import { Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  msgSent: boolean = false;

  lat: number = 51.5232;
  lng: number = -0.1578;

  userForm: any;
  
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profile: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  sendMessage = () => {
    this.msgSent = true;
  }
}

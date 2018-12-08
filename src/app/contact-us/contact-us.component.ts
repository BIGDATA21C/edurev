import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DataServicesService } from 'src/app/services/data-services.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitted: Boolean = false;

  constructor(private fb: FormBuilder, private dataService: DataServicesService) {
    this.contactForm = fb.group({
      'name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'subject' : [null, Validators.required],
      'message' : [null, [Validators.required, Validators.minLength(10)]],
      'mobile' : [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  contactAction(contactForm) {
    this.isSubmitted = true;
    if (!this.contactForm.invalid) {
     this.dataService.postData('http://localhost:3000/api/contact-us', contactForm.value).subscribe(
        data => {
          // refresh the list
          console.log('Message Received');
          return true;
        },
        error => {
          console.error('Error in contact us!');
        });
      }
  }

  ngOnInit() {
  }

}

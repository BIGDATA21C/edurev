import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataServicesService} from '../services/data-services.service';
import { AuthenticationService, TokenPayload } from '../services/authentication.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  lForm: FormGroup;
  post: any;
  hide: Boolean = true;
  isRegister: Boolean = false;
  submitted: Boolean = false;
  credentials: TokenPayload = {
    email: '',
    name: '',
    mobile: null,
    password: ''
  };

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthenticationService) {
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, [Validators.required, Validators.minLength(6)]],
      // 'mobile' : [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
    this.lForm = fb.group({
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  register(rForm) {
    this.submitted = true;
    if (!this.rForm.invalid) {
      this.auth.register(rForm.value).subscribe(() => {
        this.router.navigateByUrl('/profile');
      }, (err) => {
        console.error(err);
      });


      // this.dataService.postData('http://localhost:3000/api/userRegister', rForm.value).subscribe(
      //   data => {
      //     // refresh the list
      //     console.log('user Registered');
      //     return true;
      //   },
      //   error => {
      //     console.error('Error in user regisistration!');
      //   });
      }
  }
  login(lForm) {
    if (!this.lForm.invalid) {
      this.auth.login(lForm.value).subscribe(() => {
        this.router.navigateByUrl('/profile');
      }, (err) => {
        console.error(err);
      });
      // this.dataService.postData('http://localhost:3000/api/userRegister', lForm.value).subscribe(
      //   data => {
      //     // refresh the list
      //     console.log('user Registered');
      //     return true;
      //   },
      //   error => {
      //     console.error('Error in user regisistration!');
      //   });
      }
  }

  loginRegisterSwap() {
    this.isRegister = !this.isRegister;
  }

  ngOnInit() {
  }

}

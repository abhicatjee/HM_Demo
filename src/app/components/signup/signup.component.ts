import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User;
  registerForm: FormGroup;
  submitted = false;
  

    constructor(private formBuilder:FormBuilder ,private accountService: AccountService, private router: Router) {
      this.user = new User();
   
    }
  
    ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        userId: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,5}$')]],
        name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]{2,30}$')]],
        email:['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]], 
        mobile:['', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
        role:['', [Validators.required,Validators.pattern('^[a-zA-Z ]{2,30}$')]],
        password:['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')]],
    });
    }
 // convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }


onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
  
      alert('SUCCESS!! :-)')

      this.accountService.Register(this.user).subscribe(response => {
      })
      this.router.navigateByUrl('/login');
    }
  }




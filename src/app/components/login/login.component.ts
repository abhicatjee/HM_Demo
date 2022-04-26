// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Login } from 'src/app/models/login';
// import { User } from 'src/app/models/user';
// import { AccountService } from 'src/app/services/account.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//   _user='1';
//   user: User;
//   login: Login;
//   errMsg: string;

//   loginFormGroup:FormGroup;



//   constructor(private accountService: AccountService, private router: Router) {
//     this.login = new Login();
//     this.loginFormGroup = new FormGroup({
//       email: new FormControl(),
//       password: new FormControl()
//   });
//   }

//   ngOnInit(): void {
    
//   }
//   loginSubmit() {
//     this.login.email=this.loginFormGroup.email.value;
//     this.login.password=this.password.value;
//     this.accountService.Validate(this.login).subscribe(res => {
//       this.user = res;
//       if (this.user != null) {

//         if (this.user.role == "admin") {
//           localStorage.setItem('sessionUser', this._user);
//           this.router.navigateByUrl('/admin-dashboard');
//         }
//         else {
//           this.router.navigateByUrl('/user-dashboard')
//         }
//       }
//       else {
//         this.errMsg = 'Invalid Credentials';
//       }
//     })

//   }
// }







import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _user='1';
  user: User;
  auth:Auth;
  errMsg: string;
  login: Login;
  loginForm:FormGroup;
  submitted = false;
  email = new FormControl();
  password = new FormControl();

  constructor(private fb:FormBuilder ,private accountService: AccountService, private router: Router) {
    this.login = new Login();
    this.auth = new Auth();
  }

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email:['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]], 
      password:['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,20}$')]]
         });
  }
  
  get f() { return this.loginForm.controls; }

  loginSubmit() {
    this.submitted = true;

    
    if (this.loginForm.invalid) {
        return;
    }
   
    this.errMsg = '';
    this.login.email = this.loginForm.get('email').value;
    this.login.password = this.loginForm.get('password').value

    this.accountService.Validate(this.login).subscribe(
      resp => {
        
        this.auth = resp;
        
        if (this.auth != null) {
          localStorage['token'] = this.auth.token;
          localStorage['role'] = this.auth.role;
          if ( localStorage['role'] == "admin") {
           
            localStorage.setItem('sessionUser', this._user);
            this.router.navigateByUrl('/admin-dashboard');
          }
          else {
            this.router.navigateByUrl('/admin-dashboard')
          }
        }
        else {
          this.errMsg = 'Invalid Credentials';
        }
      })

  }
 
}









import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountService } from 'src/app/services/account.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: AccountService, useValue: AccountService },
               ],
      imports:[FormsModule, ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  fit('Initial form values for loginForm group', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues ={
      email: '',
      password: ''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });
  fit('Test a FormGroup elements count', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });
  fit('submitted should be true', ()=>{
    component.loginSubmit();
    expect(component.submitted).toBeTruthy();
  })
  fit('Email check, should check email address is required', () => {
    let Email = component.loginForm.controls['email'];
    expect(Email.valid).toBeFalsy();
    expect(Email.pristine).toBeTruthy();
    expect(Email.errors['required']).toBeTruthy();
  
  });
  fit('Email check, should check email address is valid', () => {
    let Email = component.loginForm.controls['email'];
    Email.setValue('abc@gmail.com');
    expect(Email.errors['email']).toBeTruthy();
    Email.setValue('abc');
    expect(Email.errors['email']).toBeFalsy();
  });
  fit('Password check, should check password is required', () => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
    expect(password.errors['required']).toBeTruthy(); 
  });
  fit('Password check, should check password is valid', () => {
    let password = component.loginForm.controls['password'];
    password.setValue('Abc@12345');
    expect(password.errors['password']).toBeTruthy();
    password.setValue('abc');
    expect(password.errors['password']).toBeFalsy();
  });
});

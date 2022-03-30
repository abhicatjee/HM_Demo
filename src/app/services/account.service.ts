import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account_api:string='http://localhost:25649/api/Account/'
  constructor(private http:HttpClient) { }
  Register(user:User):Observable<any>
  {
  return this.http.post(this.account_api+'SignUp',user);
  }
  Validate(login:Login):Observable<User>
  {
    
    console.log(login);
    return this.http.post<User>(this.account_api+'SignIn',login);
    
  }
  GetAllUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.account_api+'GetAllUsers')
  }
}

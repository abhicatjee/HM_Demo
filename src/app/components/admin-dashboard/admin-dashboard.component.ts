import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent{
  user: User;
  users: User[];
  constructor(private accountService: AccountService, private router:Router) {
    this.user=new User();
   }


  GetAllUsers() {
    this.accountService.GetAllUsers().subscribe(resp => {
      this.users = resp;
    });
  }
  
  logout()
  {
    localStorage.clear(); 
    this.router.navigateByUrl('/login')
  }

}

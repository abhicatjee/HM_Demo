import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManageresultComponent } from './components/manageresult/manageresult.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SignupComponent } from './components/signup/signup.component';
import { StarttestComponent } from './components/starttest/starttest.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthenticationGuard } from './services/authentication.guard';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthenticationGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manageresult', component: ManageresultComponent, canActivate: [AuthenticationGuard] },
  { path: 'sidenave', component: SidenavComponent, canActivate: [AuthenticationGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'starttest', component: StarttestComponent, canActivate: [AuthenticationGuard] },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HelloComponent } from './admin/hello/hello.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'hello', component: HelloComponent },
      { path: 'welcome', component: WelcomeComponent }
    ]
  },
  {
    path: 'user', component: UserComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

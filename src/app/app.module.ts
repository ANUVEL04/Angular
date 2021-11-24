import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { HelloComponent } from './admin/hello/hello.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { BeverageComponent } from './beverage/beverage.component';
const routes: Routes=[
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'hello', component: HelloComponent },
      { path: 'welcome', component: WelcomeComponent },
      
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
  declarations: [
    AppComponent,
    BeverageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

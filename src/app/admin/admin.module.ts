import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HelloComponent,
    WelcomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }

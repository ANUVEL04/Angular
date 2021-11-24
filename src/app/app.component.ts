import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  currentBeverage ="coffee";
  beverage=['milk','tea','coffee'];
  addBeverage(newBeverage: string){
    this.beverage.push(newBeverage);
  }
}

import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {
@Input() beverages="tea";
@Output() newBeverageEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  addNewBeverage(value: string){
    this.newBeverageEvent.emit(value);
  }

}

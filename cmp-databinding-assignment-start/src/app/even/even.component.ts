import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  evenNumbers = [];
  evenNumber;
  constructor() { }

  ngOnInit() {
  }

  runIfEven(inc){
    if (inc % 2 === 0) {
      this.evenNumbers.push(inc);
      this.evenNumber = inc;
    }
  }

}

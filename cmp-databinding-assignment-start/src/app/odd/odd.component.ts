import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  oddNumbers = [];
  oddNumber;
  constructor() { }

  ngOnInit() {
  }

  runIfOdd(inc){
    if (inc % 2 !== 0) {
      this.oddNumbers.push(inc);
      this.oddNumber = inc;
    }
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  increment = 0;

  @Output() intervalEmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.intervalEmit.emit(this.increment + 1);
      this.increment++;
    // console.log(this.increment);
    }, 1000);
    
  }

  pauseGame(){
    clearInterval(this.interval);
  }

}

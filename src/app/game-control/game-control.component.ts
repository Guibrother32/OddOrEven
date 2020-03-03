import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  count:number=0;
  @Output() stoppedCount = new EventEmitter<number>();
  myVar:any;
  

  constructor() { }

  ngOnInit(): void {
  }

  startCount(){
    this.myVar = setInterval(()=>{this.count++;console.log(this.count);} ,500);
  }
  stopCount(){
    clearInterval(this.myVar);
    this.stoppedCount.emit(this.count);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  finalNumberEven:boolean=false;
  finalNumberOdd:boolean=false;
  finalNumberM:number;


  stoppedCountM(finalNumber:number){
    this.finalNumberM=finalNumber;

    if(finalNumber%2 === 0 && finalNumber!=0){
      
      return this.finalNumberEven=true,this.finalNumberOdd=false;
    }
    else{
      return this.finalNumberEven=false,this.finalNumberOdd=true;
    }
  }
  IsEven(){
    return this.finalNumberEven;
  }
  IsOdd(){
    return this.finalNumberOdd;
  }



  
}

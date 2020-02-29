import { Component, OnInit , OnDestroy} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  counter:number=0;

  timerHandle:any;
  constructor() { }

  ngOnInit() {
    this.timerHandle=setInterval(()=> {
      this.counter++;
      console.log('counter is', this.counter);
    }, 5000);
  }

  increment(e:Event){
    console.log("Event",e);
    console.trace(); //used in chrome to track events
    this.counter++;
  }

  ngOnDestroy(){
    console.log("Counter component ngOnDestroy");
    clearInterval(this.timerHandle);
  }

}

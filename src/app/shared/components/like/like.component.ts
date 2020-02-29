import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

isMouseOver=false;
  //two way binding

//[(likes)]="homePageLikes" <== example


@Input()
likes:number;

//eventname should be inputName + "Change"
@Output()
likesChange:EventEmitter<number>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  up(){
    this.likesChange.emit(this.likes+1);
  }
  down(){
    this.likesChange.emit(this.likes-1);
  }

}

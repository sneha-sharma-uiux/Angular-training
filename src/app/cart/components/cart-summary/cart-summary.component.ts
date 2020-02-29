import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {Subject, BehaviorSubject, Subscription  } from "rxjs";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit, OnDestroy {

  amount:number;
  count:number;

  amountSubscription:Subscription;
  countSubscription:Subscription;

  constructor(private cartservice:CartService) {
    console.log("CartSummary Created");
// fixed with BehaviousSubject
   // this.amount=this.cartservice.amount;
    //this.count=this.cartservice.count;
   }

  ngOnInit() {
    // subscribe for amount$ changes
    this.amountSubscription=this.cartservice.amount$.subscribe((value:number)=>{
      console.log('summary subscriber', value);
      this.amount=value;
    });
    this.countSubscription=this.cartservice.count$.subscribe((value:number)=>{
      console.log('summary subscriber', value);
      this.count=value;
    });
  }
  ngOnDestroy(){
    console.log('Cart Summary ngOnDestroy');
    this.amountSubscription.unsubscribe();
    this.countSubscription.unsubscribe();
  }

}

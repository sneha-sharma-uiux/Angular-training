import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartItems:CartItem[]=[];

  private _amount=0; //total amount
  private _count=0; //total items in cart

  public amount$ : BehaviorSubject<number>=new BehaviorSubject(this._amount);
  public count$: BehaviorSubject<number>=new BehaviorSubject(this._count);

  //sessionStorage per tab, remain until tab is opened
  //storage:Storage =window.sessionStorage;


  //localStorage for specific browser, always persistent 
  //until browser clean, removeItem, clear apis calles
  storage:Storage =window.localStorage;

  get cartItems(){
    return this._cartItems;
  }
  set cartItems(items:CartItem[]){
    this._cartItems=items;
  }

  get count(){
    return this._count;
  }
  set count(value:number){
    this._count=value;
    console.log("count is",value);
    this.count$.next(this._count);
  }


  get amount(){
    return this._amount;
  }
  set amount(value:number){
    this._amount=value;
    console.log("amount is",value);
    this.amount$.next(this._amount); // publishing value to subscriber
  }
  
  constructor() { 
    console.log('Cart Service Created');
    const strData=this.storage.getItem("cartItems");
    if(strData){
      //FIXME:Array of Object to Array of CartItem
      this._cartItems= JSON.parse(strData);
    }

    window.onstorage = ()=>{

      //when local storage changes, dump list to console
      console.log("storage changed");
      const strData=this.storage.getItem("cartItems");
      if(strData){
        //FIXME:Array of Object to Array of CartItem
        this._cartItems= JSON.parse(strData);
      }
    };
  }

  calculate():void{
    let amount=0; //local function variables
    let count=0;

    for(let cartItem of this._cartItems){
      amount+= cartItem.price*cartItem.qty;
      count+=cartItem.qty;
    }

    this.amount=amount;
    this.count=count;

  }

  addItem(cartItem: CartItem){
    this._cartItems.push(cartItem);
    this.calculate();

    this.storage.setItem("cartItems", JSON.stringify(this._cartItems));
  }

  removeItem(id:number){
    const index=this._cartItems.findIndex(item=> item.id === id);
    this._cartItems.splice(index,1);
    this.calculate();

    this.storage.setItem("cartItems", JSON.stringify(this._cartItems));
  }

  empty(){
    this._cartItems.splice(0,this._cartItems.length);
    this.calculate();
    this.storage.removeItem("cartItems");
  }
}

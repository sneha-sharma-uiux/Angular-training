import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // Dependency Injection
  //angular creates instance for CartService
  //inject into component constructor
  constructor(private cartservice:CartService) {console.log('Cart Component Created'); }

  ngOnInit() {
  }

  addItem(){
    const id=Math.ceil(Math.random()*10000);
    const cartItem=new CartItem();
    cartItem.id=id;
    cartItem.name=`Product ${id}`;
    cartItem.price=Math.ceil(Math.random() *1000)
    cartItem.qty=1;
    this.cartservice.addItem(cartItem);
  }
  clear(){
    this.cartservice.empty();
  }

}

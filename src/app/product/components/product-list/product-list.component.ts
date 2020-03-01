import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartItem } from 'src/app/cart/models/cart-item';
import { ActivatedRoute } from '@angular/router';
import { of } from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  fieldName:string;
  operator:string;
  expectedValue:number;
  
  products$:Observable<Product[]>;


  constructor(private productservice:ProductService,
              private cartservice:CartService,
              private activatedRoute:ActivatedRoute) {
                console.log(this.activatedRoute.snapshot.data);

                let products=this.activatedRoute.snapshot.data.products
                //let roles=this.activatedRoute.snapshot.data.roles
                this.products$=of(products);
               }

  ngOnInit() {
    this.products$= this.productservice.getProducts();
  }
  addToCart(product:Product){
    
    const cartItem=new CartItem();
    cartItem.id=product.id;
    cartItem.name=product.name;
    cartItem.price=product.price;
    cartItem.qty=1;
    this.cartservice.addItem(cartItem);

  }
  removeProduct(id:number){
     this.productservice.deleteProduct(id).subscribe(obj=>{
       console.log("Deleted Successfully");
       this.products$=this.productservice.getProducts();
     });
  }


}

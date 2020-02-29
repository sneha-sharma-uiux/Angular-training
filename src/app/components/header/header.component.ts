import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count$:Observable<number>;
  amount$:Observable<number>;
  constructor(private cartservice:CartService) { 
    this.amount$=this.cartservice.amount$;
    this.count$=this.cartservice.count$;
  }

  ngOnInit() {
  }

}

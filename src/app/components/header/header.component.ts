import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count$:Observable<number>;
  amount$:Observable<number>;

  authenticated$:Observable<boolean>;

  constructor(private cartservice:CartService, private authService:AuthService) { 
    this.amount$=this.cartservice.amount$;
    this.count$=this.cartservice.count$;

    this.authenticated$=this.authService.authenticated$;
  }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
  }

}

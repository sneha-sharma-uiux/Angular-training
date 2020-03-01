import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate  {
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):any{
    console.log("Can Edit guard", state.url);
    console.log("P id", next.params['id']);
    return window.confirm("do you want to edit");
  }
  
}

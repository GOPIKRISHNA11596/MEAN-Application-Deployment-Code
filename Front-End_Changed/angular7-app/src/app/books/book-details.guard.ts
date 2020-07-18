import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/Router';


@Injectable({
  providedIn: 'root'
})
export class BookDetailsGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = +next.url[1].path;
      if (isNaN(id) || id < 1) {
        alert('Invalid Book Id');
        this.router.navigate(['/books']);
        return false;
      }

    return true;
  }

}

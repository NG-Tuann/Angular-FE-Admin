import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable ({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{

  constructor(private router: Router) {}
  
  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('token');

    if (isLoggedIn !=null) {
      // Nếu đã đăng nhập, chuyển hướng về dashboard
      return true;
    } else {
      // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
      this.router.navigate(['/login']);
      return false;
    }
  }
}
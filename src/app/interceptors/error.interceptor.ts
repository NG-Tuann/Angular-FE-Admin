import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router:Router){}
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401 ) {
          // Xử lý lỗi 401 ở đây (Unauthorized)
          this.router.navigate(['/error/401']);
          console.error('Error 401: Unauthorized');
        } else if (error.status === 403) {
          // Xử lý lỗi 403 ở đây (Forbidden)
          this.router.navigate(['/error/403']);
          console.error('Error 403: Forbidden');
        }
        return throwError(error);
      })
    );
  }
}
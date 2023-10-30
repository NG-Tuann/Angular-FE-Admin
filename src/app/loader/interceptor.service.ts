import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Start loader
    this.loaderService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        () => {
          // Timeout loader khi finish duration
          this.loaderService.isLoading.next(false);
        }
      )
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDiscount } from 'src/app/models/admin/product-discount';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDiscountService {
  url="ProductDiscount"
  constructor(private httpClient: HttpClient) { }

  // Tim ve tat ca san pham
  public findAllProductDiscounts() : Observable<ProductDiscount[]> {
    return this.httpClient.get<ProductDiscount[]>(`${Environment.apiUrl}/${this.url}/`+'findAllProductDiscount');
  }
}

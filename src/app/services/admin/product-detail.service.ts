import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from 'src/app/models/admin/product_detail';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  url="ProductDetail"
  constructor(private httpClient: HttpClient) { }
  
  public create(productDetail: ProductDetail) : Observable<ProductDetail[]> {
    return this.httpClient.post<ProductDetail[]>(`${Environment.apiUrl}/${this.url}/`+'create',productDetail);
  }
}

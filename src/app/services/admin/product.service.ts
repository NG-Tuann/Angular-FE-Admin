import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductDto } from 'src/app/dtos/admin/product-dto';
import { Product } from 'src/app/models/admin/product';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="Product"
  constructor(private httpClient: HttpClient) { }

  // Tim ve tat ca san pham

  public findAllProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${Environment.apiUrl}/${this.url}/`+'findAllProduct');
  }

  // Tao moi san pham
  public createNewProduct(formData: FormData) :Observable<Product[]> {
    return this.httpClient.post<Product[]>(`${Environment.apiUrl}/${this.url}/`+'create', formData);
  }

  // Xoa san pham
  public deleteProductById(id:number) : Observable<Product[]> {
    return this.httpClient.delete<Product[]>(`${Environment.apiUrl}/${this.url}/`+'delete/'+id);
  }


  // Tim san pham theo id
  public findProductById(id:number) : Observable<Product> {
    return this.httpClient.get<Product>(`${Environment.apiUrl}/${this.url}/`+'findProductById/'+id);
  }

  // Cap nhat best seller
  public updateBestSeller(id:number) : Observable<string> {
    return this.httpClient.put<string>(`${Environment.apiUrl}/${this.url}/`+'updateBestSeller/'+id,null);
  }

  // Cap nhat active
  public updateActive(id:number) : Observable<string> {
    return this.httpClient.put<string>(`${Environment.apiUrl}/${this.url}/`+'updateActive/'+id,null);
  }

  // Cap nhat best homefalg
  public updateHomeFlag(id:number) : Observable<string> {
    return this.httpClient.put<string>(`${Environment.apiUrl}/${this.url}/`+'updateHomeFlag/'+id,null);
  }


}

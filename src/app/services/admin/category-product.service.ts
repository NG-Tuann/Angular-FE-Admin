import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryProduct } from 'src/app/models/admin/category_product';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {

  url="CategoryProduct"
  constructor(private httpClient: HttpClient) { }

  public findAllNonParentCategory() : Observable<CategoryProduct[]> {
    return this.httpClient.get<CategoryProduct[]>(`${Environment.apiUrl}/${this.url}/`+'findAllNonParentCategoryProduct');
  }
}

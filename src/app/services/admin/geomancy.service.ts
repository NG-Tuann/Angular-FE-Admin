import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Geomancy } from 'src/app/models/admin/geomancy';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeomancyService {
  url="Geomancy"
  constructor(private httpClient: HttpClient) { }

  public findAllProducts() : Observable<Geomancy[]> {
    return this.httpClient.get<Geomancy[]>(`${Environment.apiUrl}/${this.url}/`+'findAllGeomancy');
  }

}

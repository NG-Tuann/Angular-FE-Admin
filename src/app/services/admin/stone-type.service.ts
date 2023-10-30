import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StoneType } from 'src/app/models/admin/stone_type';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoneTypeService {

  url="StoneType"
  constructor(private httpClient: HttpClient) { }

  public findAllStoneType() : Observable<StoneType[]> {
    return this.httpClient.get<StoneType[]>(`${Environment.apiUrl}/${this.url}/`+'findAllStoneType');
  }
}

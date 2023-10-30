import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/admin/role';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url="Role"
  
  constructor(private httpClient: HttpClient) { }

  public findAllRole() : Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${Environment.apiUrl}/${this.url}/`+'findAllRole');
  }
}

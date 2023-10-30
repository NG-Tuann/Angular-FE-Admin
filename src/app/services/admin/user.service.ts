import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from 'src/app/dtos/admin/user-dto';
import { User } from 'src/app/models/admin/user';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="UserAuth"
  constructor(private httpClient: HttpClient) { }

  public findAllUser() : Observable<User[]> {
    return this.httpClient.get<User[]>(`${Environment.apiUrl}/${this.url}/`+'findAllUser');
  }
  
  public createNewUser(user: UserDto) : Observable<User[]> {
    return this.httpClient.post<User[]>(`${Environment.apiUrl}/${this.url}/`+'register',user);
  }

  public updateUser(user: UserDto) : Observable<User[]> {
    return this.httpClient.put<User[]>(`${Environment.apiUrl}/${this.url}/`+'updateUser',user);
  }
}

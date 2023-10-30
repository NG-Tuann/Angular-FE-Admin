import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/models/admin/login_model';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="UserAuth"
  constructor(private httpClient: HttpClient) {}

  public login(username:string, password:string) : Observable<string> {
    console.log(username);
    console.log(password);

    const model = new LoginModel(username,password);

    return this.httpClient.post<string>(`${Environment.apiUrl}/${this.url}/`+'login',model);
  }
  
}

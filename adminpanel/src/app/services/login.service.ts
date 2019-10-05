import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url} from '../manual/url';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  adminLogin(data)
  {
    return this.http.post(`${url}loginadmin`,data);
  }
  changepass(data)
  {
    return this.http.post(`${url}changepassword`,data);
  }
}

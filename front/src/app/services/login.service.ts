import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url} from '../manual/url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  userLogin(data)
  {
    return this.http.post(`${url}loginuser`,data);
  }

  userReg(data)
  {
    return this.http.post(`${url}reguser`,data);
  }
}

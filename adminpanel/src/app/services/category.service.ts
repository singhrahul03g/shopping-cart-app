import { Injectable } from '@angular/core';
import {url} from '../manual/url';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  addCategory(data)
  {
    return this.http.post(`${url}addcategory`,data);
  }
  fetchcategory()
  {
    return this.http.get(`${url}fetchcat`);
  }
  fetchcatbyid(id)
  {
    return this.http.get(`${url}getcatbyid/${id}`);
  }
  deletecategory(id)
  {
    return this.http.get(`${url}delcat/${id}`);
  }
}

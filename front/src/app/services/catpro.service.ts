import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {url} from '../manual';
@Injectable({
  providedIn: 'root'
})
export class CatproService {

  constructor(private http:HttpClient) { }
  getcategory()
  {
    return this.http.get(`${url}fetchcat`)
  }
  latProducts()
  {
    return this.http.get(`${url}latestproducts`)
  }
  catProducts(cn)
  {
    return this.http.get(`${url}catproducts/${cn}`)
  }
  prodetailsbyid(pid)
  {
    return this.http.get(`${url}productdetailsbyid/${pid}`)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {url} from '../manual/url';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
  getCategory()
  {
    return this.http.get(`${url}fetchcat`);
  }

  addProduct(data){
    return this.http.post(`${url}addproduct`,data);
  }

  fetchProduct(){
    return this.http.get(`${url}fetchproducts`);
  }

  deleteProduct(id){
    return this.http.get(`${url}deleteproduct/${id}`)
  }

}

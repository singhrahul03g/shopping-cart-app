import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {CatproService} from '../services/catpro.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }
  productAddedToCart;

  addProductsToCart(products:any){
    localStorage.setItem("product",JSON.stringify(products));
  }

  getProductsFromCart(){
    return JSON.parse(localStorage.getItem("product"));
  }

  removeAllProductsFromCart(){
    return localStorage.removeItem('product');
  }

  errorHandler(error: Response){
    console.log(error);
    return throwError(error);
  }

  OnAddCart(product){
    console.log(product);
    this.productAddedToCart = this.getProductsFromCart();
    if(this.productAddedToCart == null)
    {
      this.productAddedToCart=[];
      this.productAddedToCart.push(product);
      // this.totalPrice = this.proQuantity * this.productAddedToCart[0].sPrice ;
      this.addProductsToCart(this.productAddedToCart);
    }
    else if(this.productAddedToCart !== null){
      this.productAddedToCart.push(product);
      this.addProductsToCart(this.productAddedToCart);
    }
  }


}

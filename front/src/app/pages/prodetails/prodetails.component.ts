import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CatproService} from '../../services/catpro.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent implements OnInit {
  pid;
  resData;
  proData;
  productAddedToCart;
  alerts;
  proQuantity:number;
  totalPrice:number;
  constructor(private ar:ActivatedRoute,private proser:CatproService,private productService:CartService) { }
  ngOnInit() {
    this.ar.params.subscribe(par=>
      {
        this.pid=par.pid;
        this.proser.prodetailsbyid(this.pid)
        .subscribe(res=>
          {
            this.resData=res;
            if(this.resData.err==0)
            {
              this.proData=this.resData.pdata;
              console.log(this.proData)
              
            }
          })
      })
  }

  OnAddCart(product){
    return this.productService.OnAddCart(product);
  }
  
  // OnAddCart(product){
  //   console.log(product);
  //   this.productAddedToCart = this.productService.getProductsFromCart();
  //   if(this.productAddedToCart == null)
  //   {
  //     this.productAddedToCart=[];
  //     this.productAddedToCart.push(product);
  //     // this.totalPrice = this.proQuantity * this.productAddedToCart[0].sPrice ;
  //     this.productService.addProductsToCart(this.productAddedToCart);
  //   }
  //   else if(this.productAddedToCart !== null){
  //     this.productAddedToCart.push(product);
  //     this.productService.addProductsToCart(this.productAddedToCart);
  //   }
  // }
}

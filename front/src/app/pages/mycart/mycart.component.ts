import { Component, OnInit } from '@angular/core';
import {CatproService} from '../../services/catpro.service';
import {CartService} from '../../services/cart.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private proser:CatproService,private productService:CartService) { }

  cartData;
  proQuantity:number;
  totalPrice:number;
  ngOnInit() {
    this.cartData = this.productService.getProductsFromCart();
    
    console.log(this.cartData);
    // console.log(this.cartData[0].sPrice);
  }

  



}

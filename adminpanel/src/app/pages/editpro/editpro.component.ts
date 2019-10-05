import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/products.service';
@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent implements OnInit {

  constructor(private pser:ProductsService) { }

  // resData;
  // proData;
  ngOnInit() {
  
    // this.pser.fetchProduct()
    // .subscribe(res=>
    //   {
    //     this.resData=res;
    //     console.log(this.resData);
    //     if(this.resData.err==0)
    //     {
    //       this.proData=this.resData.pdata;
    //     }
    //   })
  // }

  // delpro(id)
  // {
  //   this.pser.deleteProduct(id)
  //   .subscribe(res=>
  //     {
  //       this.resData=res;
  //       if(this.resData.err==0)
  //       {
  //         this.pser.fetchProduct()
  //   .subscribe(res=>
  //     {
  //       this.resData=res;
  //       if(this.resData.err==0)
  //       {
  //         this.proData=this.resData.pdata;
  //       }
  //     })
  //       }
  //     })
  }


}

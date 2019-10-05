import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import {ProductsService} from '../../services/products.service';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  myForm:FormGroup;
  resData;
  catData;
  imgPath;
  constructor(private fb:FormBuilder,private pser:ProductsService) { }

  ngOnInit() {
    this.validate()
    this.pser.getCategory()
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          this.catData=this.resData.cdata;
        }
      })
  }

  uimage(event)
  {
    if(event.target.files.length>0)
    {
     this.imgPath=event.target.files[0];
     console.log(this.imgPath);
    }
  }

  postProduct()
  {
    let fData=this.myForm.getRawValue();
    console.log(fData);
    let formData=new FormData();
    formData.append('cname',fData.cname);
    formData.append('pname',fData.pname);
    formData.append('features',fData.features);
    formData.append('price',fData.price);
    formData.append('discount',fData.discount);
    
    formData.append('Image',this.imgPath);
    this.pser.addProduct(formData)
    .subscribe(res=>
      {
        console.log(res);
      })
    }

   validate()
   {
      this.myForm=this.fb.group(
        {
          'cname':['',Validators.required],
          'pname':['',Validators.required],
          'price':['',Validators.required],
          'discount':['',Validators.required],
          'features':['',Validators.required]


        }
      )
   }
}

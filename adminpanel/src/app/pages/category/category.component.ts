import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  resData;
  catdata;
  constructor(private cser:CategoryService) { }
  delcat(id)
  {
    this.cser.deletecategory(id)
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          this.cser.fetchcategory()
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          this.catdata=this.resData.cdata;
        }
      })
        }
      })
  }
  ngOnInit() {
    this.cser.fetchcategory()
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          this.catdata=this.resData.cdata;
        }
      })
  }

}

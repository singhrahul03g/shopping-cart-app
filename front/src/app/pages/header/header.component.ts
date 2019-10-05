import { Component, OnInit } from '@angular/core';
import { CatproService } from 'src/app/services/catpro.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  resData;
  catData;
  constructor(private cpser:CatproService) { }
  ngOnInit() {
    this.cpser.getcategory()
    .subscribe(res=>
      {
        console.log(res)
        this.resData=res;
        if(this.resData.err==0)
        {
          this.catData=this.resData.cdata;
        }
      })
  }

}

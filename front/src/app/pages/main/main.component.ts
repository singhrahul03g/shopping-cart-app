import { Component, OnInit } from '@angular/core';
import {CatproService} from '../../services/catpro.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  resData;
  proData;
  constructor(private pser:CatproService) { }

  ngOnInit() {
    this.pser.latProducts()
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          this.proData=this.resData.pdata;
        }
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatproService } from 'src/app/services/catpro.service';

@Component({
  selector: 'app-catpro',
  templateUrl: './catpro.component.html',
  styleUrls: ['./catpro.component.css']
})
export class CatproComponent implements OnInit {
  cname;
  resData;
  proData;
  constructor(private ar:ActivatedRoute,private pser:CatproService) { }

  ngOnInit() {
    this.ar.params.subscribe(par=>
      {
        this.cname=par.cn;
        this.pser.catProducts(this.cname)
        .subscribe(res=>
          {
            this.resData=res;
            if(this.resData.err==0)
            {
              this.proData=this.resData.pdata;
            }
          })
      })
   
  }

}

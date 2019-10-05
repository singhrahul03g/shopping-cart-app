import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CatproService} from '../../services/catpro.service';
@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent implements OnInit {
  pid;
  resData;
  proData;
  constructor(private ar:ActivatedRoute,private proser:CatproService) { }
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

}

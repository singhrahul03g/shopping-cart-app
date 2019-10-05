import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.css']
})
export class EditcatComponent implements OnInit {
 myForm:FormGroup;
 cid;
 resData;
  constructor(private fb:FormBuilder,private ar:ActivatedRoute,private cser:CategoryService) { }

  ngOnInit() {
    //fetch param value 
    this.ar.params.subscribe(par=>
      {
        this.cid=par.cid;
        this.cser.fetchcatbyid(this.cid)
        .subscribe(res=>
          {
            this.resData=res;
            if(this.resData.err==0)
            {
              this.myForm.controls.cname.patchValue(this.resData.cdata[0].cname)
              this.myForm.controls.description.patchValue(this.resData.cdata[0].description)
            }
          })
      })
    this.validate()
  }
  validate()
  {
     this.myForm=this.fb.group(
       {
         'cname':['',Validators.required],
         'description':['',Validators.required]
       }
     )
  }
}

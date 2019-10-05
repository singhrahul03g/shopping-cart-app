import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent implements OnInit {
 myForm:FormGroup;
 imgPath;
  constructor(private fb:FormBuilder,private catser:CategoryService) { }
  //for get image path 
  uimage(event)
  {
    if(event.target.files.length>0)
    {
     this.imgPath=event.target.files[0];
     console.log(this.imgPath);
    }
  }
  postCat()
  {
    let fData=this.myForm.getRawValue();
    let formData=new FormData();
    formData.append('cname',fData.cname);
    formData.append('description',fData.description);
    formData.append('Image',this.imgPath);
    this.catser.addCategory(formData)
    .subscribe(res=>
      {
        console.log(res);
      })
    }
  ngOnInit() {
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

import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  resData;
  errMsg;
  constructor(private fb:FormBuilder,private lser:LoginService, private router:Router) { }
  ngOnInit() {
    this.validate()
  }
  loginData()
  {
    let formData=this.loginForm.getRawValue();
    // let form1 = this.loginForm.get('email').value;
    // console.log(formData.email)
    // console.log(form1)
    this.lser.adminLogin(formData)
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          localStorage.setItem('sid',this.resData.uid);
          this.router.navigate(['/dashboard']);
        }
        if(this.resData.err==1)
        {
          this.errMsg=this.resData.msg;
        }
      })
  }
  validate()
  {
     this.loginForm=this.fb.group(
       {
         'email':['',[Validators.required,Validators.email]],
         'password':['',[Validators.required,Validators.minLength(6)]]
       }
     )
  }

}

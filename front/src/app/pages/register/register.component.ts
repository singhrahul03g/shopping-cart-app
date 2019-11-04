import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private lser: LoginService) { }

  userregister:FormGroup
  resData;
  errMsg;
  ngOnInit() {
    // this.authService.authState.subscribe((user) => 
    // {
    //   console.log(user);
    
    // });
    this.validate()
  }

  regData()
  {
    let formData=this.userregister.getRawValue();
    // let form1 = this.loginForm.get('email').value;
    // console.log(formData.email)
    // console.log(form1)
    // console.log(formData)
    this.lser.userReg(formData)
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          localStorage.setItem('sid',this.resData);
          this.router.navigate(['/myCart']);
          console.log(this.resData);
        }
        if(this.resData.err==1)
        {
          this.errMsg=this.resData.msg;
        }
      })
  }

  validate(){
    this.userregister=this.fb.group(
      {
        'email':['',[Validators.required,Validators.email]],
        'password':['',[Validators.required,Validators.minLength(6)]]
      }
    )
  }

}

import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(private router:Router)
  {

  }
   canActivate()
   {
     if(localStorage.getItem('sid')!=undefined)
     {
       return true;
     }
     else
     {
       Swal.fire("OOPS","You are not authorize","error");
       this.router.navigate(['/'])
     }
   }
}

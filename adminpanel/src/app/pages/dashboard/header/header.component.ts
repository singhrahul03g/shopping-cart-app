import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sid;
  constructor(private router:Router) { }
  logout()
  {
    localStorage.removeItem('sid');
    this.router.navigate(['/'])
  }
  ngOnInit() {
    this.sid=localStorage.getItem('sid');
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { parse } from 'querystring';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../services/http.service';
import { SharedataService } from '../services/sharedata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn:boolean;
  isUser:any;
  menu:any;
  email:string
  id:any;
  firstName:string;
  isLoginPge:boolean;
  isResetPwdPge:boolean;
  constructor(private router: Router, public http : HttpService, public sharedata:SharedataService) {   
    this.isLoginPge=Boolean(this.router.url=='/login')
    this.isResetPwdPge=Boolean(this.router.url.includes('reset-password/'))

  this.isUser=Boolean(localStorage.getItem('user'))
  if(Boolean(localStorage.getItem('user'))){
    this.http.getUserData({email:JSON.parse(localStorage.getItem('user')).email}).subscribe((a)=>{
      this.id=JSON.parse(a)['_id']
      this.firstName=JSON.parse(a).result.firstName
    })
  }
  
}
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('user')){
          this.isUser=true
        }else{
          this.isUser=false
        }
      }
    })
  }

  moveToHome(){
    this.router.navigate(['/']);
  }
  loggedOut(){
    this.email=JSON.parse(localStorage.getItem('user')).email
    this.http.getUserData({email:this.email}).subscribe((a)=>{
    this.http.userLogOut({email:this.email},JSON.parse(a)['_id'])
     } )
    localStorage.removeItem('user');
    this.sharedata.sendIsLoginValue(false)
    this.isUser=false;
    this.router.navigate(['/login']);
  }


}

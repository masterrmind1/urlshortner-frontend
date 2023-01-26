import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { SharedataService } from '../services/sharedata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public sharedata:SharedataService,private router: Router,public appHttp:HttpService,
    private route: ActivatedRoute) { }
  httpStatus!:string;
  password!:string;
  ConfirmPassword!:string;
  emailId!:string;
  isBothPasswordSame!:boolean;
  newPassword!:string;
  userData!:any;
  resetPass!:any;
  id:any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
        this.appHttp.getUserDataFromId({urlId:this.id}).subscribe((a)=>{
        this.emailId=JSON.parse(a).email
        })
  }
  backToLogin(){
    this.httpStatus=''
  } 

  onSubmit(form:NgForm){
  
  this.appHttp.resetPassword({email:this.emailId ,currentPassword:this.password, newPassword:this.newPassword},this.id)
    .subscribe(result=>{
      this.httpStatus=result['result']
      if(result['status']==200){
        setTimeout(() => {
          this.router.navigate(['/'])
      }, 1000);      
      }
      })

    if(this.password==this.ConfirmPassword){
      this.isBothPasswordSame=true;
    }
  }
  
}

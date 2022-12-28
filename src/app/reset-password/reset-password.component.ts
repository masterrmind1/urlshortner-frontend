import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SharedataService } from '../services/sharedata.service';
import { emailObjTable } from '../object';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public sharedata:SharedataService,private router: Router,public appHttp:HttpService) { }
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
    this.emailId=JSON.parse(localStorage.getItem('user')).email
        console.log(this.emailId)
        this.appHttp.getUserData({email:this.emailId}).subscribe((a)=>{
          this.id = JSON.parse(a)['_id'];
        })
  }
  backToLogin(){
    this.httpStatus=''
  } 

  onSubmit(form:NgForm){
    this.emailId=JSON.parse(localStorage.getItem('user')).email
  console.log(this.emailId,this.password,this.newPassword)
  console.log(1)

  this.appHttp.resetPassword({email:this.emailId ,currentPassword:this.password, newPassword:this.newPassword},this.id)
    .subscribe(result=>{
      console.log(result)
      this.httpStatus=result['result']
      if(result['status']==200){
        setTimeout(() => {
          this.router.navigate(['/'])
      }, 1000);
        
      
      }
      console.log(2)
      })

    if(this.password==this.ConfirmPassword){
      this.isBothPasswordSame=true;
    }
  }
  
}

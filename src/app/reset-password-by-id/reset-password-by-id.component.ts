import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SharedataService } from '../services/sharedata.service';
import { emailObjTable } from '../object';
import { ActivatedRoute } from '@angular/router';
import { truncate } from 'cypress/types/lodash';
@Component({
  selector: 'app-reset-password-by-id',
  templateUrl: './reset-password-by-id.component.html',
  styleUrls: ['./reset-password-by-id.component.css']
})
export class ResetPasswordByIdComponent implements OnInit {

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
  urlId:any;
  resetPasswordStatus:boolean;
  canLogin:boolean;
  ngOnInit(): void {
    this.urlId = this.route.snapshot.paramMap.get('urlId');
  }
  backToLogin(){
    this.httpStatus=''
  } 
  onSubmit(form:NgForm){
  this.appHttp.resetPasswordbyId({email:this.emailId ,currentPassword:this.password, newPassword:this.newPassword},this.urlId)
    .subscribe(result=>{
      console.log(result)
      this.httpStatus=result['result']
      if(result['status']==200){
        this.httpStatus=this.httpStatus+' now you can login'
        this.canLogin=true
      
      }
      })

    if(this.password==this.ConfirmPassword){
      this.isBothPasswordSame=true;
    }
  }
  
}

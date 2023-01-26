import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { SharedataService } from '../services/sharedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  isBothPasswordSame = false;
  matcher = new ErrorStateMatcher()
  isLoginMode = true;
  isLogin = false;
  constructor(private router: Router, public appHttp: HttpService, private sharedata: SharedataService) { 

    // this.sharedata.sendIsLoginPageOpen(Boolean(this.router.url=='/login'))
  }
  email!: string;
  password!: string;
  ConfirmPassword!: string;
  httpStatus!: string;
  isForgetPassword = false;
  user_Id: any;
  firstName:string;
  lastName:string;
  ngOnInit(): void {
    
    if (Boolean(localStorage.getItem('user'))) {
      this.router.navigate(['/']);
    }
  }

  backToLogin() {
    this.httpStatus = ''
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm) {
    if (!this.isLoginMode) {
      this.appHttp.userSignup({ email: this.email, password: this.password, confirmPassword: this.ConfirmPassword,
      firstName:this.firstName, lastName:this.lastName })
        .subscribe(result => {
          this.httpStatus = result['result']
          if (result['status'] == 201) {
            localStorage.setItem('user', JSON.stringify({ email: this.email, firstName: this.firstName, lastName:this.lastName }))
            this.isLogin = true;
            this.sharedata.sendIsLoginValue(this.isLogin)
            this.router.navigate(['/']
            );
          }
        })
    } else {
      this.appHttp.userLogin({ email: this.email, password: this.password })
        .subscribe(result => {
          this.httpStatus = result['result']
          if (result['status'] == 200) {
              localStorage.setItem('user', JSON.stringify({ email: this.email, firstName: this.firstName, lastName:this.lastName }))
              this.isLogin = true;
              this.sharedata.sendIsLoginValue(this.isLogin)
              this.router.navigate(['/']);
          }
          else if(result['status'] == 400){
            this.httpStatus = result['result']
          }
        })
    }
    if (this.password == this.ConfirmPassword) {
      this.isBothPasswordSame = true;
    }
  }
  onLogin() {
    this.router.navigate(['/']);
    this.isLogin = true;
  }

  onForgetPassword() {
    this.isForgetPassword = true

  }
  forgetPassword() {
    this.appHttp.forgetPassword({ email: this.email }).subscribe((result) => {
      this.httpStatus = result['result']
    })
  }
  cancel() {
    this.isForgetPassword = false

  }

  updatePassword() {
    this.user_Id = this.user_Id.replace('"', '');
    this.user_Id = this.user_Id.replace('"', '');


    // this.appHttp.resetPassword({password:this.password, confirmPassword:this.ConfirmPassword },this.user_Id).subscribe((r)=>{
    //   console.log(r)
    //})
  }
}

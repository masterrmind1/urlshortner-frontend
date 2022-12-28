import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
 public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
 public isLogInPage: boolean;

  constructor() { }

  sendIsLoginValue(data){
    console.log(data)
this.isUserLoggedIn=data
  }

  getIsLoginValue(){
    return this.isUserLoggedIn
  }

  // sendIsLoginPageOpen(data){
  //   this.isLogInPage=data
  // }
  // getIsLoginPageOpen(){
  //   return this.isLogInPage
  // }
}

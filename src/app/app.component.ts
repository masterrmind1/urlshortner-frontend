import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'URL_Frontend';
  name="ok"
  currentNavigation:any;
  isLoginOrNot:boolean
  constructor(private router:Router){
    this.isLoginOrNot=false;
    console.log(this.router.url)

  }

  setLoginValue(data){
    this.isLoginOrNot=data
  }

  // movedToHome(){
  //   console.log(this.router.getCurrentNavigation())
  //   this.currentNavigation=this.router.getCurrentNavigation()
  //   console.log(this.currentNavigation)
  //   if(this.currentNavigation!=null){
  //     this.isLoginOrNot=  this.router.getCurrentNavigation()
  //        .extras.state['isLoggedIn']
  //   }
  // }

 
}


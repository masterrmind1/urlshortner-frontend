import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
//   email: string;
//   name: string;
//   password: string;
//   user: userInfo;
//   authentication: boolean;
//   isVerified: string;
//   isMenuOpen = true;
//   sideNavClass: string;
//   device;
//   menu;
   constructor( private http: HttpClient) { }
signIn(email:string, password:string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCTXsSnRJXaLokzT7mJYSvWVzR4LUfYAuI',
    {
        email:EmailValidator,
        password:password,
        returnSecureToken:true
    })
}



// loginGoogle(){
//   this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
//   firebase.auth().onAuthStateChanged(user => {
  
//   if (user) {
//     localStorage.setItem('user', JSON.stringify(user))
//     this.user=JSON.parse(localStorage.getItem('user'));
//     this.authentication = !!this.user.email;
//     console.log(this.authentication);
//     localStorage.setItem('name', this.user.displayName);
//     localStorage.setItem('email', this.user.email);

//     this.name = localStorage.getItem('name');
//     this.email = localStorage.getItem('email');
//     console.log(this.name);
//   }
// });

// }
// loginFacebook(){
//   this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       localStorage.setItem('user', JSON.stringify(user))
//       this.user=JSON.parse(localStorage.getItem('user'));
//       this.authentication = !!this.user.email || !!this.user.displayName;
//       console.log(this.authentication);
//       localStorage.setItem('name', this.user.displayName);
//       localStorage.setItem('email', this.user.email);

//       this.name = localStorage.getItem('name');
//       this.email = localStorage.getItem('email');
//       console.log(this.name);
//     }
//   });
// }
// loginManually(){
  
// }
// logOut(){
//   this.auth.signOut();
//   firebase.auth().signOut().then(() => {
//     console.log("sign out succesfull")
//   }).catch((error) => {
//     console.log(error.message);
//   });
//   this.authentication = false;
//   localStorage.clear();
// }
}

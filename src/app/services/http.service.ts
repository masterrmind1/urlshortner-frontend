import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { emailObjTable, LoginTable, resetPsswordTable, signupTable } from '../object';
import { tmpdir } from 'os';
import { Observable, throwError } from 'rxjs';
//import { Http } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/login`)
  }

  userSignup(body: signupTable) {
    console.log('servc')
    return this.http.post(`${this.apiUrl}/signup`, body)
    // .pipe(catchError(err=>
    //   this.catchAuthError(err)
    // ))
  }

  userLogin(body: LoginTable) {
    return this.http.post(`${this.apiUrl}/login`, body, this.requestOptions())
    // .pipe(catchError(err=>
    //   this.catchAuthError(err)
    // ))
  }

  forgetPassword(body) {
    // console.log(this.http.post(`${this.apiUrl}/forget-password`,body, {responseType:'text'}))
    return this.http.post(`${this.apiUrl}/forget-password`, body)
      .pipe(catchError(err =>
        this.catchAuthError(err)
      ))
  }

  resetPassword(body: resetPsswordTable, id) {
    return this.http.patch(`${this.apiUrl}/reset-password/${id}`, body)
      .pipe(catchError(err =>
        this.catchAuthError(err)
      ))
  }
  resetPasswordbyId(body: resetPsswordTable, urlId) {
    return this.http.patch(`${this.apiUrl}/reset/${urlId}`, body)
      .pipe(catchError(err =>
        this.catchAuthError(err)
      ))
  }

  getUserData(body) {
    return this.http.post(`${this.apiUrl}/getUser`, body, { responseType: 'text' })
    // .pipe(catchError(err=>
    //   this.catchAuthError(err)
    // ))
  }

  getUserDataFromId(body) {
    return this.http.post(`${this.apiUrl}/getUserFromId`, body, { responseType: 'text' })
  }

  userLogOut(body, id) {
    return this.http.patch(`${this.apiUrl}/logoutAll/${id}`, body, { responseType: 'text' })
      .pipe(catchError(err =>
        this.catchAuthError(err)
      ))
  }
  generateURL(body) {
    return this.http.post(`${this.apiUrl}/home/generate_URL`, body, { responseType: 'text' })
    // .pipe(catchError(err=>
    //   this.catchAuthError(err)
    // ))

  }
  getAllUrls(body) {
    return this.http.post(`${this.apiUrl}/home/allUrls`, body, { responseType: 'text' })
    // .pipe(catchError(err=>
    //   this.catchAuthError(err)
    // ))

  }

  private requestOptions() {
    let headers;
    headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'Application/json');
    return headers
  }

  catchAuthError(error): Observable<Response> {
    if (error && error.error && error.error.message) {
      alert(error.error.message)
    } else if (error && error.message) {
      alert(error.message)
    } else {
      alert(JSON.stringify(error))
    }
    return throwError(error);

  }
}






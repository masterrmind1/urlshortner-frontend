import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators, FormBuilder, FormGroup, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable, Subject } from 'rxjs';
import { HttpService } from '../services/http.service';
import { SharedataService } from '../services/sharedata.service';
const urlValidator = require('url-validation')
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // emailFormControl = new FormControl('', [Validators.required]);
  // matcher = new ErrorStateMatcher()


  longUrl: string;
  shortUrl: string;
  urlOutput: any;
  isShortUrl = false;
  isLoggedIn = false;
  allUrlData: any;
  dataSource: PeriodicElement[];
  isCardShow = false;
  lengthOfUrlsArray: number;
  isValidUrl: true;

  constructor(public httpservice: HttpService, public sharedataService: SharedataService) {
    this.isValidUrl = urlValidator(this.longUrl)
  }
  ngOnInit(): void {
    this.isValidUrl = urlValidator(this.longUrl)
    this.isLoggedIn = Boolean(JSON.parse(localStorage.getItem('user')))
    if (this.isLoggedIn) {
        this.httpservice.getAllUrls({ email: JSON.parse(localStorage.getItem('user')).email.toLowerCase() }).subscribe((a) => {
        this.allUrlData = JSON.parse(a)
        this.dataSource = this.allUrlData
        console.log(this.allUrlData)
        this.lengthOfUrlsArray = this.allUrlData.length

      })
    }
    
  }
  displayedColumns: string[] = ['position', 'longUrl', 'shortUrl'];

  onSubmit(form: NgForm) {
    try {

      // this.sub.subscribe((val) => {
      //   console.log(val)
      //   this.isValidUrl = val
      // })
      if (!Boolean(localStorage.getItem('user'))) {
        this.isCardShow = true
        this.shortUrl = "Please Login First"
      } else {
        this.isValidUrl = urlValidator(form.form.value.longUrl)
        console.log(this.isValidUrl)

        if (this.isValidUrl) {
          console.log(form.form.value.longUrl)

          this.isValidUrl = urlValidator(this.longUrl)
          this.httpservice.generateURL({
            longUrl: this.longUrl, email: JSON.parse(localStorage.getItem('user')).
              email
          }).subscribe((a) => {

            console.log(a, typeof (a))
            this.isCardShow = true;
            try {
              this.shortUrl = JSON.parse(a)['shortUrl']
              this.isShortUrl = true;
            } catch (e) {
              this.shortUrl = a
              this.isShortUrl = false;
            }


          })
        } else {
          this.isCardShow = true
          this.shortUrl = "Please Enter Valid URL"
        }
      }




    } catch (e) {
      this.isCardShow = true
      this.shortUrl = "Please Login First"
    }
  }
}


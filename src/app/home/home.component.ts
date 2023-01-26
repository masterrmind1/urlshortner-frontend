import { JsonPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators, FormBuilder, FormGroup, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTable } from '@angular/material/table';
import { contains } from 'cypress/types/jquery';
import { Observable, Subject } from 'rxjs';
import { HttpService } from '../services/http.service';
import { SharedataService } from '../services/sharedata.service';
const urlValidator = require('url-validation')
export interface PeriodicElement {
  No: number;
  email:string
  longUrl: string;
  shortUrl: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<PeriodicElement>

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
  isLimitExid:boolean;

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
        this.lengthOfUrlsArray = this.allUrlData.length
      })
    }
  }
  displayedColumns: string[] = ['position', 'longUrl', 'shortUrl'];
  onSubmit(form: NgForm) {
    try {      
      if (!Boolean(localStorage.getItem('user'))) {
        this.isCardShow = true
        this.shortUrl = "Please Login First"
      } else {
        this.isValidUrl = urlValidator(form.form.value.longUrl)
        if (this.isValidUrl) {
          console.log(form.form.value.longUrl)
          this.isValidUrl = urlValidator(this.longUrl)
          this.httpservice.generateURL({
            longUrl: this.longUrl, email: JSON.parse(localStorage.getItem('user')).
              email
          }).subscribe((a) => {
            console.log(a, typeof (a))
            this.dataSource.push({email:JSON.parse(localStorage.getItem('user')).email, longUrl:a['longUrl'], shortUrl:a['result'], No:this.dataSource.length+1})
            this.table.renderRows();
            console.log(this.dataSource)
            this.isCardShow = true;
            try {
              this.shortUrl =a['result']
              if(this.shortUrl.includes('you already have')){
                this.isShortUrl = false;
              }else{
              this.isShortUrl = true;
              }

            } catch (e) {
              this.shortUrl = a['result']
              this.isShortUrl = false;
            }
          })
        } else {
          this.isCardShow = true
          this.shortUrl = "           Please Enter a Valid URL"
        }
      }
    } catch (e) {
      this.isCardShow = true
      this.shortUrl = "Please Login First"
    }
  }
}


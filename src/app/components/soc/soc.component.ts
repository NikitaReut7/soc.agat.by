import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { map, catchError, switchMap } from 'rxjs/operators';
import {  of, timer } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ApplicationService } from 'src/app/services/application.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
declare function handleFormSubmit(event): any;
@Component({
  selector: 'app-soc',
  templateUrl: './soc.component.html',
  styleUrls: ['./soc.component.css']
})
export class SocComponent implements OnInit {
  public showloader: boolean = false;      

  private timer: Observable<any>;
  //constructor(private router:Router, public languageService: LanguageService, public applicationService: ApplicationService) { }

  
  myForm: FormGroup;
  email = 'soc@agat.by';
  service:any;
  constructor(  private httpClient: HttpClient, public applicationService: ApplicationService ,  public fb: FormBuilder, private _snackBar: MatSnackBar) {
  
  
  }


  getIP() {
    this.httpClient.get<{ip:string}>('https://jsonip.com')
  .subscribe(data => {
    this.service = data.ip;
    console.log(this.service);
  })
}

  reactiveForm() {
    this.getIP();
    this.myForm = this.fb.group({
      
      name: ['', [Validators.required]],
    
      email: ['', [Validators.required,  Validators.pattern("[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*")], ],
      phone: ['', [Validators.required]  ],

      service: ['' ],
      service2: ['' ]
    })
  }



  ngOnInit() {
      const htm = document.getElementById("h");
                htm.style.overflow = "auto";
    this.getIP();
    window.scrollTo(0, 0);
   
      this.applicationService.menuClickServices();

     
    /*  this.script.load('filepicker').then(data => {
        console.log('script loaded ', data);
    }).catch(error => console.log(error));
*/

      this.reactiveForm();
   
    

     // window.scrollTo(0, 0);
    //  this.setTimer();
    }

    openSnackBar(message: string, action: string, ) {
      this._snackBar.open(message, action,  {
        duration: 5000,
        panelClass: ['info'],
      });
    }

    handle(event) {
      this.openSnackBar('Сообщение отправлено успешно! Мы свяжемся с вами в ближайшее время', '');
    // console.log(event)  ;
     //event.target.form.controls['service'].setValue(this.service.toString());
      handleFormSubmit(event.target.form);
    }

    public errorHandling = (control: string, error: string) => {
      return this.myForm.controls[control].hasError(error);
    }
 


   
 
}

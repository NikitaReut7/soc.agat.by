import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
declare function handleFormSubmit(event): any;
@Component({
  selector: 'app-audition',
  templateUrl: './audition.component.html',
  styleUrls: ['./audition.component.css']
})
export class AuditionComponent implements OnInit {
  myForm: FormGroup;
  email = 'soc@agat.by';
  service:any;
  constructor(  private httpClient: HttpClient, public applicationService: ApplicationService ,  public fb: FormBuilder, private _snackBar: MatSnackBar) {
  
  
  }


  getIP() {
    this.httpClient.get<{ip:string}>('https://jsonip.com')
  .subscribe(data => {
    this.service = data.ip;
    //console.log(this.service);
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
    this.getIP();
    window.scrollTo(0, 0);
   
    this.applicationService.menuClickServices();

       const htm = document.getElementById("h");
                htm.style.overflow = "auto";
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
     //console.log(event)  ;
     //event.target.form.controls['service'].setValue(this.service.toString());
      handleFormSubmit(event.target.form);
    }

    public errorHandling = (control: string, error: string) => {
      return this.myForm.controls[control].hasError(error);
    }
 
  }


  



  

 
 
  



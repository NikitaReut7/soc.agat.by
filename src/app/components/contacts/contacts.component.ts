import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { EmailService } from 'src/app/services/email.service';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
declare var $: any;
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { map, catchError, switchMap } from 'rxjs/operators';
import {  of, timer } from 'rxjs';

import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { LanguageService } from 'src/app/services/language.service';




import {  ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import * as utility from '../../../assets/js/form-submission-handler.js'; 
import { LolService } from 'src/app/lol.service.js';
import { ApplicationService } from 'src/app/services/application.service.js';


import {OnDestroy} from '@angular/core';
import {fromEvent} from 'rxjs';
import 'rxjs/Rx';
import { strictEqual } from 'assert';
import { MatSnackBar } from '@angular/material';




export interface Subject {
  name: string;
}

declare function handleFormSubmit(event): any;
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  
})
export class ContactsComponent implements OnInit, OnDestroy {









  realValue: string = null;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup;
  selected: string;
 // @ViewChild('chipList', { static: true }) chipList;
  GradeArray: any = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
  SubjectsArray: Subject[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  selectOption(id) {
    //getted from event 
    this.myForm.controls['service'].setValue( (id))  ;
   // console.log(id);
    //getted from binding
  //  console.log(this.number)
  }


  toppings = new FormControl();
  toppingList: string[] = ['11 ', '2', '3', '4', '5', '6'];


  openSnackBar(message: string, action: string, ) {
    this._snackBar.open(message, action,  {
      duration: 5000,
      panelClass: ['info'],
    });
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      
      name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      email: ['', [Validators.required,  Validators.pattern("[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*")], ],
      phone: ['', [Validators.required]  ],
      message: ['', [Validators.required]   ],
      service: [''  ]
    })
  }

  /* Date */
    date(e) {
      var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
      this.myForm.get('dob').setValue(convertDate, {
        onlyself: true
      })
    }

      /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.SubjectsArray.length < 5) {
      this.SubjectsArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.SubjectsArray.indexOf(subject);
    if (index >= 0) {
      this.SubjectsArray.splice(index, 1);
    }
  }  

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
    //console.log(this.myForm.value);
   
  }






















































  mattypeFormControl: FormControl;
  matsubtypeFormControl: FormControl;
  instrumentFormControl: FormControl;
  projectFormControl: FormControl;
  dateFormControl: FormControl;
  timeFormControl: FormControl;
  corrFileFormControl: FormControl;
  laboratoryFormControl: FormControl;
  operatorFormControl: FormControl;
  form: FormGroup;
  heroForm: FormGroup;


  public showloader: boolean = false;      
  private subscription: Subscription;
  private timer: Observable<any>;




  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;

  subscriptions: Subscription[] = [];

  connectionStatusMessage: string;
  connectionStatus: string;

  service:any;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
              private _emailService: EmailService, private http: HttpService,  public fb: FormBuilder,
              public afAuth: AngularFireAuth, private fun: AngularFireFunctions, public ordersService: HttpService, private httpp: HttpClient,
              public languageService: LanguageService, private script: LolService,
              public applicationService: ApplicationService,
             private httpClient: HttpClient
              ) { 
                 /**
                    * Get the online/offline status from browser window
                    */
                   this.getIP();
       
                }
                foods: Food[] = [
                  {value: 'аудит', viewValue: 'Аудит информационной безопасности '},
                  {value: 'пентест', viewValue: 'Проведение тестирования на проникновение'},
                  {value: 'мониторинг', viewValue: 'Мониторинг и реагирование на инциденты кибербезопасности'},
                  {value: 'смиб', viewValue: 'Разработка и внедрение систем менеджмента информационной безопасности (СМИБ)'}
                ];
           
  coffees = [
    "Americano",
    "Flat White",
    "Cappuccino",
    "Latte",
    "Espresso",
    "Machiato",
    "Mocha",
    "Hot Chocolate",
    "Tea"
  ];

  emails = [];

  email = 'soc@agat.by';

  getIP() {
      this.httpClient.get<{ip:string}>('https://jsonip.com')
    .subscribe(data => {
      this.service = data.ip;
     // console.log(this.service);
    })
   
    
  }

  addCoffee = coffee => this.emails.push(coffee);

  removeCoffee = coffee => {
    let index = this.emails.indexOf(coffee);
    if (index > -1) this.emails.splice(index, 1);
  };

  onSubmit() {
    this.ordersService.form.value.email = this.emails;
    let data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
     // console.log('Sended');
    });
  }
  
  loadAPI: Promise<any>;
 



  ngOnDestroy(): void {
    /**
    * Unsubscribe all subscriptions to avoid memory leak
    */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }


  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
      handle(event) {
        this.openSnackBar('Сообщение отправлено успешно! Мы свяжемся с вами в ближайшее время', '');
      // console.log('works ' + event)  ;
    
        handleFormSubmit(event.target.form);
      }

               ngOnInit()
              {
                  const htm = document.getElementById("h");
                htm.style.overflow = "auto";
                this.applicationService.menuClickContacts();
               
              /*  this.script.load('filepicker').then(data => {
                  console.log('script loaded ', data);
              }).catch(error => console.log(error));
*/

                this.reactiveForm();
                this.heroForm = new FormGroup({
                 
                  'alterEgo': new FormControl(''),
                  'power': new FormControl('this.hero.power', Validators.required)
                });
              

                window.scrollTo(0, 0);
                this.setTimer();


                this.mattypeFormControl = new FormControl({value: ''},
                [ Validators.required, ]);
                this.matsubtypeFormControl = new FormControl({value: ''},
                [ Validators.pattern('^[a-zA-Z ]*$')]);
                this.instrumentFormControl = new FormControl({value: ''},
                [ Validators.required, ]);
                this.projectFormControl = new FormControl({value: ''},
                [ Validators.required, Validators.pattern('^[a-zA-Z ]*$')]);
                this.dateFormControl = new FormControl({value: ''},
                [ Validators.required,  ]);
                this.corrFileFormControl =  new FormControl({value: ''},
                [ Validators.required, Validators.pattern('^[a-zA-Z ]*$')]);
                this.laboratoryFormControl =  new FormControl({value: ''},
                [ Validators.required, Validators.pattern('^[a-zA-Z ]*$')]);
                this.operatorFormControl = new FormControl({value: ''},
                [ Validators.required, Validators.pattern('^[a-zA-Z ]*$')]);
               // this.data = this.route.snapshot.data;
                this.form = new FormGroup({
                  mattypeFormControl: this.mattypeFormControl,
                  matsubtypeFormControl: this.matsubtypeFormControl,
                  instrumentFormControl: this.instrumentFormControl,
                  projectFormControl: this.projectFormControl,
                  dateFormControl: this.dateFormControl,
                  corrFileFormControl: this.corrFileFormControl,
                  laboratoryFormControl: this.laboratoryFormControl,
                  operatorFormControl: this.operatorFormControl
                });
              }

              loginWithGoogle() {
                this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
              }
            
              sendEmail() {
                const callable = this.fun.httpsCallable('emailMessage');
               // callable({ text: 'Sending email with Angular and SendGrid is fun!', subject: 'Email from Angular'}).subscribe();
              }

            

            
           

              public setTimer(){
            
                // set showloader to true to show loading div on view
                this.showloader   = true;
            
                this.timer        = timer(1000); // 5000 millisecond means 5 seconds
              //  console.log('working');
                this.subscription = this.timer.subscribe(() => {
                    // set showloader to false to hide loading div from view after 5 seconds
                   // console.log('worked');
                    this.showloader = false;
                });
              }





    closeMenu() {


      const nav = document.getElementById('h');
      document.getElementById('h').style.overflow = "auto";
      nav.classList.remove('navActive');
    }
    

    status: boolean = true;
    
  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
    document.getElementById('h').style.overflow = "auto";
   }
  
    clickEvent(){


      const nav = document.getElementById('h');
      if(this.status) {
        nav.classList.add('navActive');
        nav.style.overflow = "hidden";
      } else {
        nav.classList.remove('navActive');
        nav.style.overflow = "auto";
      }
     
      this.status = !this.status; 
      this.languageService.highlightLink();    
    }


    navigateToHome() {
      document.getElementById('h').className = "";
      document.getElementById('h').style.overflow = "auto";
    this.router.navigate(["home"]);
    }
  
  
  navigateToServices() {
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.router.navigate(["services"]);
     
  
  }
  
  navigateToAbout() {
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.router.navigate(["about"]);
   
  }
  
  
  
  navigateToContacts() {
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.router.navigate(["contacts"]);
   
  }
  
  navigateToTeam() {
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.router.navigate(["team"]);
   
  }
  
  navigateToFeeds() {
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.router.navigate(["feeds"]);
   
  }
  
  navigateToPartners() {
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.router.navigate(["reviews"]);
    
  }

 
}

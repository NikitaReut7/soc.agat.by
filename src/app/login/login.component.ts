import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  valid: boolean = false;
  return = '';
  error: any;
  email: any;
  password: any;
  myForm: FormGroup;
  key: string = "AIzaSyATMVjNR1mQckAn2PyS_cEMwjvOavp_A7M";
  @ViewChild('captchaRef') captcha;

  constructor(private applicationService:ApplicationService, private zone: NgZone, private _snackBar: MatSnackBar, private fb: FormBuilder, private appService:ApplicationService,
     public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
         const htm = document.getElementById("h");
                htm.style.overflow = "auto";
        this.router.navigateByUrl(this.return);
      }
    });
  }



    /* Handle form errors in Angular 8 */
    public errorHandling = (control: string, error: string) => {
      return this.myForm.controls[control].hasError(error);
    }

    openSnackBar(message: string, action: string, ) {
      this._snackBar.open(message, action,  {
        duration: 3000,
        panelClass: ['info'],
      });
    }




  ngOnInit() {








      this.applicationService.menuClickLogin();

       let parsedRoute = JSON.parse(localStorage.getItem('route'));

 
      
     // console.log(parsedRoute);

if(parsedRoute != undefined || parsedRoute != null) {
 if(parsedRoute.toString() == "login") {
            const htm = document.getElementById("h");
                htm.style.overflow = "hidden";


      }
}
     





    this.myForm = this.fb.group({
      
    
      email: ['', [Validators.required,  Validators.pattern("[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*")], ],
      
      password: ['', [Validators.required]   ],
 
    })

    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/home');
  }

  onSubmit(formData) {
//console.log(formData);

  
      this.afAuth.auth.signInWithEmailAndPassword(formData.target.form[0].value, formData.target.form[1].value).then(
        (success) => {
          this.openSnackBar('Авторизация прошла успешно.', '');

          const htm = document.getElementById("h");
                htm.style.overflow = "auto";

         // console.log(success);

          this.router.navigate([this.return]);
        }).catch(
          (err) => {
            if(err.code == 'auth/wrong-password') {
              this.openSnackBar('Неверный e-mail или пароль.', '');

              this.captcha.reset();
              this.valid = false;
            }

            if(err.code == 'auth/network-request-failed') {
              this.openSnackBar('Проверьте подключение к сети.', '');
            }

            if(err.code == 'auth/too-many-requests') {
             // this.openSnackBar('Проверьте подключение к сети.', '');

              this.captcha.reset();
              this.openSnackBar('Слишком много неудачных попыток. Попробуйте позже.', '');
            }

            ///"auth/too-many-requests
          //  console.log(err);
           // this.snack.show();
          // console.log(err);
            this.error = err;
          });

          //auth/network-request-failed
          //auth/wrong-password
    
  }


resolved(captchaResponse: string) {
  if(captchaResponse != null) {
    //console.log(captchaResponse);
    this.valid = true;
    this.captcha.execute();
  } 
  else {
    this.valid = false;
  }
}


}

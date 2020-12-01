import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { map, catchError, switchMap } from 'rxjs/operators';
import {  of, timer } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { ApplicationService } from 'src/app/services/application.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})


export class HomeComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

 

  return = '';
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  public showloader: boolean = false;      

  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
 
  private timer: Observable<any>;

  public image: string = 'https://firebasestorage.googleapis.com/v0/b/shishko-e3441.appspot.com/o/logo.png?alt=media&token=e6890c34-834a-409c-a7bd-30d31aa8bf29';

  constructor(  public afAuth: AngularFireAuth, config: NgbCarouselConfig, private router: Router, public translate: TranslateService, public languageService: LanguageService, public applicationService: ApplicationService) {
   
  // customize default values of carousels used by this component tree
  config.showNavigationArrows = true;
  config.showNavigationIndicators = false;

 

    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
   }

   public getPreviousUrl(){
    return this.previousUrl;
  } 

  public ngOnInit() {
    window.scrollTo(0, 0);
    // call this setTimer method when you want to set timer
    this.applicationService.menuClickMain();


      this.afAuth.authState.subscribe(auth => {
      if (auth) {
         const htm = document.getElementById("h");
                htm.style.overflow = "auto";
     
        //console.log(this.name.email);
     
        this.router.navigateByUrl(this.return);
      } else {
        
         const htm = document.getElementById("h");
                htm.style.overflow = "auto";
      }
    });
  }


  ngAfterViewInit(){

  }

  ngOnChanges(e) {
   
  }





 



 





}

import { Injectable } from '@angular/core';
import { Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import { LanguageService } from './language.service';
import { TranslateService } from '@ngx-translate/core';
//import undefined = require('firebase/empty-import');

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  showFeeds1: boolean = false;
  constructor(private router: Router,
              private languageService: LanguageService, 
              private tranlateService: TranslateService) { }

              status: boolean = true;
               speed = 120;
               smooth = 12


               showFeeds(lol) {
                localStorage.setItem('feeds', JSON.stringify(lol));
                this.showFeeds1 = lol;
              }


//о нас
  navigateToAbout() {
    if(this.router.url === '/about' ) {
      document.getElementById('h').className = "";
      document.getElementById('h').style.overflow = "auto";
      this.status = true;
      return;
    }
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.status = true;
  this.router.navigate(["about"]);
  }
  
  
  //контакты
  navigateToContacts() {
    if(this.router.url === '/contacts' ) {
      document.getElementById('h').className = "";
      document.getElementById('h').style.overflow = "auto";
      this.status = true;
      window.scrollTo(0, 0);
      return;
    }
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.status = true;
    this.router.navigate(["contacts"]);
  }
  

  //домой 
  navigateToHome() {
    if(this.router.url === '/home' ) {
      document.getElementById('h').className = "";
      document.getElementById('h').style.overflow = "auto";
      this.status = true;
      window.scrollTo(0, 0);
      return;
    }
   document.getElementById('h').className = "";
   document.getElementById('h').style.overflow = "auto";
   this.status = true;
   this.router.navigate(["home"]);
  }
  

  //новости
  navigateToFeeds() {
    if(this.router.url === '/news' ) {
     document.getElementById('h').className = "";
      document.getElementById('h').style.overflow = "auto";
      this.status = true;
      window.scrollTo(0, 0);
      return;
    }
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.status = true;
    this.router.navigate(["news"]);
 
  }

//услуги
  navigateToServices() {
    if(this.router.url === '/services' ) {
     document.getElementById('h').className = "";
      document.getElementById('h').style.overflow = "auto";
      this.status = true;
      window.scrollTo(0, 0);
      return;
    }
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.status = true;
    this.router.navigate(["services"]);
    
  }



  //аудит
  navigateToAudition() {
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.status = true;
    this.router.navigate(["services/audit"]);
    window.scrollTo(0, 0);
  }


  //пентест
  navigateToPentest() {
   document.getElementById('h').className = "";
   document.getElementById('h').style.overflow = "auto";
   this.status = true;
   this.router.navigate(["services/pentest"]);
   window.scrollTo(0, 0);
  }


  //мониторинг
  navigateToSoc() {
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.status = true;
    this.router.navigate(["services/monitoring"]);
    window.scrollTo(0, 0);
  }

  
  //смиб
  navigateToDocumentary() {
   document.getElementById('h').className = "";
   document.getElementById('h').style.overflow = "auto";
   this.status = true;
   this.router.navigate(["services/isms"]);
   window.scrollTo(0, 0);
  }

 

  //отзывы
  navigateToPartners() {
    if(this.router.url === '/reviews' ) {
      document.getElementById('h').className = "";
      document.getElementById('h').style.overflow = "auto";
      this.status = true;
      window.scrollTo(0, 0);
      return;
    }
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.status = true;
    this.router.navigate(["reviews"]);
}

//агат ctf2019
navigateToCtf2019() {
  document.getElementById('h').className = "";
  document.getElementById('h').style.overflow = "auto";
  this.router.navigate(["feeds/ctf2019"]);
}

//статистика 2018
navigateToStatistics2018() {
  document.getElementById('h').className = "";
  document.getElementById('h').style.overflow = "auto";
  this.router.navigate(["feeds/statistic2018"]);
}


//belta
navigateToBelta() {
  window.location.href="https://www.kaspersky.ru/about/press-releases/2019_laboratoriya-kasperskogo-pomogla-obespechit-bezopasnost-evropeyskih-igr-v-minske";
}



//открыть меню
clickEvent(){
    

  const nav = document.getElementById('h');

  
  const toolbar = document.getElementById('toolbar');
  const logo = document.getElementById('logo');
  const drift = document.getElementById('drift-widget');
 // console.log(this.status);
  if(this.status) {
    nav.classList.add('navActive');
    //nav.innerHTML.style
    nav.style.overflow = "hidden";
   // logo.style.display="none";
   // toolbar.style.display="none";
   /* setTimeout(() => {
      logo.style.display="none";
     
      
      }, 200);*/
    //  toolbar.style.zIndex="9";
   //   drift.style.display="none";

  } else {
    nav.classList.remove('navActive');
    nav.style.overflow = "auto";
  //  logo.style.display="flex";
  //  toolbar.style.zIndex="10";
   // drift.style.display="flex";
    //logo.style.display="flex";
   // toolbar.style.display="flex";
  // setTimeout(this.returnBack, 1000);
  /* setTimeout(() => {
//logo.style.display="flex";
   toolbar.style.display="flex";

   }, 1000);*/
  }
 
  this.status = !this.status;   
  
  this.languageService.highlightLink();




  
}



close() {
  const nav = document.getElementById('h');

  
  const toolbar = document.getElementById('toolbar');
  const logo = document.getElementById('logo');
  const drift = document.getElementById('drift-widget');
  nav.classList.remove('navActive');
  nav.style.overflow = "auto";
  logo.style.display="flex";
  toolbar.style.zIndex="10";
  drift.style.display="flex";
  this.languageService.highlightLink();
}


//закрыть меню
closeMenu() {
  const nav = document.getElementById('h');
  nav.classList.remove('navActive');
  document.getElementById('h').style.overflow = "auto";
}

//сменить язык
switchLanguage(language: string) {
  this.tranlateService.use(language);
  localStorage.setItem('lang', JSON.stringify(language));
  
  //document.getElementById('h').style.overflow = "auto";
 // document.getElementById('h').classList.remove('navActive');


//this.clickEvent();
  //this.languageService.highlightLink1();
}

scroll() {
  window.scroll({
    top: 760, 
    left: 0, 
    behavior: 'smooth'
  });
}




menuClickMain() {
  const main = document.getElementById('main');
  const services = document.getElementById('services');
  const reviews = document.getElementById('reviews');
  const news = document.getElementById('news');
  const contacts = document.getElementById('contacts');
  const feeds = document.getElementById('feeds');
  main.classList.add('moto-widget-menu-link-active');
  services.classList.remove('moto-widget-menu-link-active');
  reviews.classList.remove('moto-widget-menu-link-active');
  news.classList.remove('moto-widget-menu-link-active');
  contacts.classList.remove('moto-widget-menu-link-active');
  feeds.classList.remove('moto-widget-menu-link-active');

  localStorage.setItem('route', JSON.stringify('main'));  
}

menuClickServices() {
  const main = document.getElementById('main');
  const services = document.getElementById('services');
  const reviews = document.getElementById('reviews');
  const news = document.getElementById('news');
  const contacts = document.getElementById('contacts');
  const feeds = document.getElementById('feeds');
  main.classList.remove('moto-widget-menu-link-active');
  services.classList.add('moto-widget-menu-link-active');
  reviews.classList.remove('moto-widget-menu-link-active');
  news.classList.remove('moto-widget-menu-link-active');
  contacts.classList.remove('moto-widget-menu-link-active');
  feeds.classList.remove('moto-widget-menu-link-active');

  localStorage.setItem('route', JSON.stringify('services'));  
}

menuClickReviews() {
  const main = document.getElementById('main');
  const services = document.getElementById('services');
  const reviews = document.getElementById('reviews');
  const news = document.getElementById('news');
  const contacts = document.getElementById('contacts');
  const feeds = document.getElementById('feeds');
  main.classList.remove('moto-widget-menu-link-active');
  services.classList.remove('moto-widget-menu-link-active');
  reviews.classList.add('moto-widget-menu-link-active');
  news.classList.remove('moto-widget-menu-link-active');
  contacts.classList.remove('moto-widget-menu-link-active');
  feeds.classList.remove('moto-widget-menu-link-active');

  localStorage.setItem('route', JSON.stringify('reviews'));  
}

menuClickNews() {
  const main = document.getElementById('main');
  const services = document.getElementById('services');
  const reviews = document.getElementById('reviews');
  const news = document.getElementById('news');
  const contacts = document.getElementById('contacts');
  const feeds = document.getElementById('feeds');
  main.classList.remove('moto-widget-menu-link-active');
  services.classList.remove('moto-widget-menu-link-active');
  reviews.classList.remove('moto-widget-menu-link-active');
  news.classList.add('moto-widget-menu-link-active');
  contacts.classList.remove('moto-widget-menu-link-active');
  feeds.classList.remove('moto-widget-menu-link-active');

  localStorage.setItem('route', JSON.stringify('news'));  
}

menuClickContacts() {
  const main = document.getElementById('main');
  const services = document.getElementById('services');
  const reviews = document.getElementById('reviews');
  const news = document.getElementById('news');
  const contacts = document.getElementById('contacts');
  const feeds = document.getElementById('feeds');
  main.classList.remove('moto-widget-menu-link-active');
  feeds.classList.remove('moto-widget-menu-link-active');
  services.classList.remove('moto-widget-menu-link-active');
  reviews.classList.remove('moto-widget-menu-link-active');
  news.classList.remove('moto-widget-menu-link-active');
  contacts.classList.add('moto-widget-menu-link-active');

  localStorage.setItem('route', JSON.stringify('contacts'));  
}


menuClickFeeds() {
  const main = document.getElementById('main');
  const services = document.getElementById('services');
  const reviews = document.getElementById('reviews');
  const news = document.getElementById('news');
  const contacts = document.getElementById('contacts');
  const feeds = document.getElementById('feeds');

  main.classList.remove('moto-widget-menu-link-active');
  services.classList.remove('moto-widget-menu-link-active');
  reviews.classList.remove('moto-widget-menu-link-active');
  news.classList.remove('moto-widget-menu-link-active');
  contacts.classList.remove('moto-widget-menu-link-active');
  feeds.classList.add('moto-widget-menu-link-active');

  localStorage.setItem('route', JSON.stringify('feeds'));  
}

menuClickLogin() {
  

  localStorage.setItem('route', JSON.stringify('login'));  
}




}



/*  


import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { map, catchError, switchMap } from 'rxjs/operators';
import {  of, timer } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  public showloader: boolean = false;      
  private subscription: Subscription;
  private timer: Observable<any>;

  public image: string = 'https://firebasestorage.googleapis.com/v0/b/shishko-e3441.appspot.com/o/logo.png?alt=media&token=e6890c34-834a-409c-a7bd-30d31aa8bf29';

  constructor(private router: Router, public translate: TranslateService, public languageService: LanguageService) {
   



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
    this.setTimer();
  }
  public ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', JSON.stringify(language));
    document.getElementById('h').className = "";  
    document.getElementById('h').style.overflow = "auto";
  }

  
  public setTimer(){

    // set showloader to true to show loading div on view
    this.showloader   = true;

    this.timer        = timer(1000); // 5000 millisecond means 5 seconds
    console.log('working');
    this.subscription = this.timer.subscribe(() => {
        // set showloader to false to hide loading div from view after 5 seconds
        console.log('worked');
        this.showloader = false;
    });
  }
  ngAfterViewInit(){

  }

  ngOnChanges(e) {
   
  }

  navigateToServices() {
    document.getElementById('h').className = "";
    document.getElementById('h').style.overflow = "auto";
    this.router.navigate(["services"]);
    
  }
  

  scroll() {
    window.scroll({
      top: 760, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  closeMenu() {


    const nav = document.getElementById('h');
   
    nav.classList.remove('navActive');
    document.getElementById('h').style.overflow = "auto";
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
  
  navigateToHome() {
   // event.preventDefault(); 
   document.getElementById('h').className = "";
   document.getElementById('h').style.overflow = "auto";
   this.router.navigate(["home"]);
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

  status: boolean = true;
  clickEvent(){
    

    const nav = document.getElementById('h');
    if(this.status) {
      nav.classList.add('navActive');
      //nav.innerHTML.style
      nav.style.overflow = "hidden";
    } else {
      nav.classList.remove('navActive');
      nav.style.overflow = "auto";
    }
   
    this.status = !this.status;   
    
    this.languageService.highlightLink();
    
  }





}


*/



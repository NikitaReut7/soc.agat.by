import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { ApplicationService } from './services/application.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './components/dialog/dialog.component';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  name : any;
  logged = false;
  return = '';
  internetConnectivity = 'Internet is active';
  showFeeds: boolean = false;
  links = ['home', 'about', 'services'];
  activeLink = this.links[0];
  background = '';
  status: boolean = false;

  toggleClass() {
    this.status = !this.status;
  }


  constructor(
    private appService:ApplicationService,
    private router: Router,
    public translate: TranslateService,
    public lang: LanguageService,
    private applicationService: ApplicationService,
    public dialog: MatDialog,
   
    public afAuth: AngularFireAuth
) {
  window.scrollTo(0, 0);
 // this.applicationService.SmoothScroll(document);
 
}

onFocus() {
  const menu = document.getElementById('mymenu');
  menu.classList.add('moto-widget-menu-mobile-open');
}

onBlur() {
  this.toggleClass();

}

scroll() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '90%',
      height: '80%',
      data: {name: 'this.name', animal: 'this.animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
      //this.animal = result;
    });
  }
  
  ngOnChanges() {
    

  }

onResize(event) {
    //console.log(event.target.innerWidth);
  
    let parsedRoute = JSON.parse(localStorage.getItem('route'));

 
      
     // console.log(parsedRoute);
      if(parsedRoute.toString() == "login" && event.target.innerWidth < 535) {
            const htm = document.getElementById("h");
                htm.style.overflow = "hidden";


      }


}

  ngOnInit() {
    this.lang.setLang();


    let parsedRoute = JSON.parse(localStorage.getItem('route'));

    let feeds = JSON.parse(localStorage.getItem('feeds'));
   

/*
    if(parsedRoute != undefined && parsedRoute != null) {
      const activeRoute = document.getElementById(parsedRoute);
      activeRoute.classList.add('moto-widget-menu-link-active');
    } else {
      this.applicationService.menuClickMain();
    }*/


    this.afAuth.authState.subscribe(auth => {
      if (auth) {
         const htm = document.getElementById("h");
                htm.style.overflow = "auto";
        this.name = auth;
        //console.log(this.name.email);
        this.logged = true;
        this.router.navigateByUrl(this.return);
      } else {
        
        this.logged = false;
      }
    });

  }

  clickEvent() {
    this.applicationService.clickEvent();
  }


  navigateToHome() {
    this.applicationService.navigateToHome();
    this.applicationService.close();
  }
  

  navigateToAbout() {
    this.applicationService.navigateToAbout();
    this.applicationService.close();
   // this.applicationService.status = true;
  }


   navigateToServices() {
    this.applicationService.navigateToServices();
    this.applicationService.close();
  }
  
  navigateToPartners() {
    this.applicationService.navigateToPartners();
    this.applicationService.close();
  }

   
  navigateToFeeds() {
    this.applicationService.navigateToFeeds();
  }

  
  navigateToContacts() {
    this.applicationService.navigateToContacts();
    this.applicationService.close();
  }
  

  navigateToAudition() {
    this.applicationService.navigateToAudition();
  }

  navigateToPentest() {
    this.applicationService.navigateToPentest();
  }

  navigateToSoc() {
    this.applicationService.navigateToSoc();
  }
 

  navigateToDocumentary() {
    this.applicationService.navigateToDocumentary();
  }


  navigateToCtf2019() {
    this.applicationService.navigateToCtf2019();
  }

  navigateToStatistics2018() {
    this.applicationService.navigateToStatistics2018();
  }

  navigateToBelta() {
    this.applicationService.navigateToBelta();
  }
 
 closeMenu() {
  const activeRoute = document.getElementById('mymenu');
  if(  activeRoute.classList.contains('moto-widget-menu-mobile-open')) {
    activeRoute.classList.remove('moto-widget-menu-mobile-open');
  this.status = !this.status;
  }
 }

 switchLanguage(language: string) {
  this.applicationService.switchLanguage(language);
  //this.applicationService.close();
 }

 navigateToFeeds1() {
   this.router.navigate(['feeds']);
 }

 navigateToLogin() {
 // console.log('loggin in');
 
  this.router.navigate(['login']);
 }

 navigateToQuitLogin() {
  // console.log('logged out');
  this.logged = !this.logged;
  this.afAuth.auth.signOut();
    this.router.navigateByUrl('/home');
 }

}

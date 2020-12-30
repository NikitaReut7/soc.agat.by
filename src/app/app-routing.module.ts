
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ServicesComponent } from './components/services/services.component';

import { AuditionComponent } from './components/audition/audition.component';
import { PentestComponent } from './components/pentest/pentest.component';
import { SocComponent } from './components/soc/soc.component';

import { DocumentaryComponent } from './components/documentary/documentary.component';
import { Ctf2019Component } from './components/ctf2019/ctf2019.component';

import { PartnersComponent } from './components/partners/partners.component';
import { NewsComponent } from './components/news/news.component';
import { LkComponent } from './components/lk/lk.component';
import { Lk2Component } from './components/lk2/lk2.component';
import { Lk4Component } from './components/lk4/lk4.component';
import { Lk5Component } from './components/lk5/lk5.component';
import { Lk6Component } from './components/lk6/lk6.component';
import { Lk7Component } from './components/lk7/lk7.component';
import { Lk8Component } from './components/lk8/lk8.component';
import { Lk9Component } from './components/lk9/lk9.component';



import { Lk3Component } from './components/lk3/lk3.component';
import { CtfComponent } from './components/ctf/ctf.component';
import { FeedsComponent } from './feeds/feeds.component';
import { AuthGuard } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { Feed1Component } from './components/feed1/feed1.component';
import { Feed2Component } from './components/feed2/feed2.component';
import { Feed3Component } from './components/feed3/feed3.component';
import { Feed4Component } from './components/feed4/feed4.component';
import { SecureService } from './services/secure.service';
import { AssetsGuardService } from './services/assets-guard.service';


const routes: Routes = [
 
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, canActivate: [SecureService] },

  { path: 'news', component: NewsComponent, canActivate: [SecureService] },

  { path: 'news/kaspersky-security-day', component: LkComponent, canActivate: [SecureService] },
  { path: 'news/ensuring-safety-at-second-european-games', component: Lk2Component, canActivate: [SecureService] },
  { path: 'news/corporate-information-security-webinar', component: Lk4Component, canActivate: [SecureService] },
  { path: 'news/main-aspects-of-ensuring-information-security', component: Lk5Component, canActivate: [SecureService] },
  { path: 'news/participation-in-it-conference', component: Lk6Component, canActivate: [SecureService] },
  { path: 'news/information-protection-day', component: Lk7Component, canActivate: [SecureService] },
  { path: 'news/information-security-certificate', component: Lk8Component, canActivate: [SecureService] },
  { path: 'news/new-year-greetings', component: Lk9Component, canActivate: [SecureService] },
  
  { path: 'news/сybersecurity-and-сryptography', component: Lk3Component, canActivate: [SecureService] },
  { path: 'news/ctf-2019', component: CtfComponent, canActivate: [SecureService] },
  { path: 'about', component: AboutComponent,  canActivate: [SecureService] 
 },




  { path: 'services', component: ServicesComponent,  canActivate: [SecureService] },

  {path: 'services/audit', component: AuditionComponent,  canActivate: [SecureService]  },
  {path: 'services/pentest', component: PentestComponent,  canActivate: [SecureService] },
  {path: 'services/monitoring', component: SocComponent,  canActivate: [SecureService] },
 // {path: 'services/dlp-testing', component: DlpTestingComponent},
 // {path: 'services/codetesting', component: CodetestingComponent},
  {path: 'services/isms', component: DocumentaryComponent,  canActivate: [SecureService]  },

  //{ path: 'team', component: TeamComponent },

 // { path: 'feeds', component: FeedsComponent },

//  { path: 'feeds/ctf2019', component: Ctf2019Component },
 // { path: 'feeds/statistic2018', component: Statistic2018Component },



  { path: 'contacts', component: ContactsComponent,  canActivate: [SecureService]  },

  { path: 'reviews', component: PartnersComponent,  canActivate: [SecureService]  },
  
  { path: 'login', component: LoginComponent,  canActivate: [SecureService]  },
  { path: 'feeds', component: FeedsComponent,  canActivate: [AuthGuard] },
  { path: 'feeds/honeypot-activity-may-august-2019', component: Feed1Component, canActivate: [AuthGuard, SecureService],  },
  { path: 'feeds/malware-analysis-august-2019', component: Feed2Component, canActivate: [AuthGuard, SecureService] },
  { path: 'feeds/malware-analysis-september-2019', component: Feed3Component, canActivate: [AuthGuard, SecureService] },
  { path: 'feeds/malware-analysis-december-2019', component: Feed4Component, canActivate: [AuthGuard, SecureService] },
  { path: 'assets', component: HomeComponent,  canActivate: [SecureService, AssetsGuardService]  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },


  
/*

                                    <mat-list-item routerLink="/feeds/malware-analysis-august-2019">
                                       <a matLine >Вирусная аналитика (август 2019)</a>
                                      
                                    </mat-list-item>

                                    <mat-list-item routerLink="/feeds/honeypot-activity-may-aygust-2019">
*/

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';




import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';

import { ServicesComponent } from './components/services/services.component';


import { EmailService } from './services/email.service';

import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuditionComponent } from './components/audition/audition.component';
import { PentestComponent } from './components/pentest/pentest.component';
import { SocComponent } from './components/soc/soc.component';

import { DocumentaryComponent } from './components/documentary/documentary.component';
import { Ctf2019Component } from './components/ctf2019/ctf2019.component';

import { PartnersComponent } from './components/partners/partners.component';

// Import your library
import { OwlModule } from 'ngx-owl-carousel';




import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';


import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import {HttpClientModule, HttpClient} from '@angular/common/http';
import { LazyLoadDirective } from './directives/lazy-load.directive';


import {NgsRevealModule} from 'ngx-scrollreveal';



// added
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { NgxPhoneMaskModule } from 'ngx-phone-mask';
import { DialogComponent } from './components/dialog/dialog.component';




import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './components/news/news.component';
import { CtfComponent } from './components/ctf/ctf.component';
import { LkComponent } from './components/lk/lk.component';
import { FirstNComponent } from './components/first-n/first-n.component';
import { Lk2Component } from './components/lk2/lk2.component';
import { Lk3Component } from './components/lk3/lk3.component';
import { Lk4Component } from './components/lk4/lk4.component';
import { Lk5Component } from './components/lk5/lk5.component';
import { Lk6Component } from './components/lk6/lk6.component';
import { Lk7Component } from './components/lk7/lk7.component';
import { Lk8Component } from './components/lk8/lk8.component';
import { Lk9Component } from './components/lk9/lk9.component';
import { LIGHTBOX_CONFIG, LightboxModule } from '@ngx-gallery/lightbox';
import { GalleryModule } from '@ngx-gallery/core';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { FeedsComponent } from './feeds/feeds.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.service';
import { Feed1Component } from './components/feed1/feed1.component';
import { Feed2Component } from './components/feed2/feed2.component';
import { Feed3Component } from './components/feed3/feed3.component';
import { Feed4Component } from './components/feed4/feed4.component';
//import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';

import { RecaptchaModule } from 'ng-recaptcha';

export function HttpLoaderFactory(htttp: HttpClient) {
  return new TranslateHttpLoader(htttp, './assets/', '.json');
}


@NgModule({
  declarations: [

    

    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
 
    ServicesComponent,

    AuditionComponent,
    PentestComponent,
    SocComponent,

    DocumentaryComponent,
    Ctf2019Component,

    PartnersComponent,

    LazyLoadDirective,

    DialogComponent,

    NewsComponent,

    CtfComponent,

    LkComponent,

    FirstNComponent,

    Lk2Component,

    Lk3Component,

    Lk4Component,

    Lk5Component,

    Lk6Component,

    Lk7Component,

    Lk8Component,

    Lk9Component,

    FeedsComponent,

    LoginComponent,

    Feed1Component,

    Feed2Component,

    Feed3Component,

    Feed4Component,

 
  ],
  imports: [
    RecaptchaModule,
    NgImageSliderModule,
    ImageViewerModule,
    LightboxModule,
    GalleryModule,
  //  NgbPaginationModule, NgbAlertModule,
  NgbModule,
    NgxPhoneMaskModule,
    ReactiveFormsModule,
    AngularFullpageModule, //*** added
    NgsRevealModule,

    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    OwlModule
  ],
  providers: [EmailService, AuthGuard,
  
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [DialogComponent],
})
export class AppModule { }

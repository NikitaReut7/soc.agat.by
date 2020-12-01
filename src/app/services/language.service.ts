import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public lang: string;
  public ruLang: string = 'ru';
  constructor(public translate: TranslateService) { }


  ngOnInit() {
   
  }


  setLang() {
    this.lang = JSON.parse(localStorage.getItem('lang'));
    if(this.lang == undefined || this.lang == null) {
      localStorage.setItem('lang', JSON.stringify(this.ruLang));  
      this.translate.use('ru');
      this.lang = "ru";
    } else {
      this.translate.use(this.lang);
    }

   
  }

  highlightLink1() {
    
    const lang = JSON.parse(localStorage.getItem('lang'));
    if(lang == "ru") {
      const ruLink = document.getElementById('ru1');
      ruLink.classList.add('active');
      const enLink = document.getElementById('en1');
      enLink.classList.remove('active');
      const belLink = document.getElementById('bel1');
      belLink.classList.remove('active');
    }


    if(lang == "en") {
      const enLink = document.getElementById('en1');
      enLink.classList.add('active');
      const ruLink = document.getElementById('ru1');
      ruLink.classList.remove('active');
      const belLink = document.getElementById('bel1');
      belLink.classList.remove('active');
    }


    if(lang == "bel") {
      const belLink = document.getElementById('bel1');
      belLink.classList.add('active');
      const ruLink = document.getElementById('ru1');
      ruLink.classList.remove('active');
      const enLink = document.getElementById('en1');
      enLink.classList.remove('active');
    }
  }

  highlightLink() {
     

    const lang = JSON.parse(localStorage.getItem('lang'));
    if(lang == "ru") {
      const ruLink = document.getElementById('ru');
      ruLink.classList.add('active');
      const enLink = document.getElementById('en');
      enLink.classList.remove('active');
      const belLink = document.getElementById('bel');
      belLink.classList.remove('active');
    }


    if(lang == "en") {
      const enLink = document.getElementById('en');
      enLink.classList.add('active');
      const ruLink = document.getElementById('ru');
      ruLink.classList.remove('active');
      const belLink = document.getElementById('bel');
      belLink.classList.remove('active');
    }


    if(lang == "bel") {
      const belLink = document.getElementById('bel');
      belLink.classList.add('active');
      const ruLink = document.getElementById('ru');
      ruLink.classList.remove('active');
      const enLink = document.getElementById('en');
      enLink.classList.remove('active');
    }
  }


  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', JSON.stringify(language));
    document.getElementById('h').className = "";  
  }
}

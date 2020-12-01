import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { map, catchError, switchMap } from 'rxjs/operators';
import {  of, timer } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ApplicationService } from 'src/app/services/application.service';
@Component({
  selector: 'app-ctf2019',
  templateUrl: './ctf2019.component.html',
  styleUrls: ['./ctf2019.component.css']
})
export class Ctf2019Component implements OnInit {
  public showloader: boolean = false;      
  
  private timer: Observable<any>;
  constructor(private router: Router, public languageService: LanguageService, public applicationService: ApplicationService) { }

  ngOnInit() {
      const htm = document.getElementById("h");
                htm.style.overflow = "auto";
    window.scrollTo(0, 0);
   
  }




  
  

  




}

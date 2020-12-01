import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lk',
  templateUrl: './lk3.component.html',
  styleUrls: ['./lk3.component.css']
})
export class Lk3Component implements OnInit {

  constructor(private applicationService: ApplicationService, private router:Router) { }

  ngOnInit() {
      const htm = document.getElementById("h");
                htm.style.overflow = "auto";
    window.scrollTo(0, 0);
    this.applicationService.menuClickNews();
  }
  navigateToContacts() {
    this.router.navigate(['contacts']);
  }



}

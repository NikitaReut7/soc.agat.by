import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lk',
  templateUrl: './lk5.component.html',
  styleUrls: ['./lk5.component.css']
})
export class Lk5Component implements OnInit {

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

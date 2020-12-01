import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-lk2',
  templateUrl: './lk2.component.html',
  styleUrls: ['./lk2.component.scss']
})
export class Lk2Component implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
      const htm = document.getElementById("h");
                htm.style.overflow = "auto";
    window.scrollTo(0, 0);
    this.applicationService.menuClickNews();
  }

  navigateToKas() {
    window.location.href="https://www.kaspersky.ru/about/press-releases/2019_laboratoriya-kasperskogo-pomogla-obespechit-bezopasnost-evropeyskih-igr-v-minske";
  }
  
}

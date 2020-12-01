import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-ctf',
  templateUrl: './ctf.component.html',
  styleUrls: ['./ctf.component.scss']
})
export class CtfComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
      const htm = document.getElementById("h");
                htm.style.overflow = "auto";
    window.scrollTo(0, 0);
    this.applicationService.menuClickNews();
  }

}

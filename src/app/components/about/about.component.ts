
import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 

  constructor(public applicationService: ApplicationService,
  ) {
    
   }





  ngOnChanges() {
    
  }



  ngOnInit() {
    
    window.scrollTo(0, 0);
      const htm = document.getElementById("h");
                htm.style.overflow = "auto";
   // this.applicationService.SmoothScroll(document);
}

 

  


  ngAfterViewInit() {
  
  }
  



}

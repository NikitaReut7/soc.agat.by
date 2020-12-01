import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  constructor(private router: Router, private applicationService: ApplicationService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.applicationService.menuClickFeeds();
  }

  navigateToFeed1() {
    this.router.navigate(['feeds/feed1']);
  }
  navigateToFeed2() {
    this.router.navigate(['feeds/feed2']);
  }
  navigateToFeed3() {
    this.router.navigate(['feeds/feed3']);
  }
}

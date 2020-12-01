import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed4',
  templateUrl: './feed4.component.html',
  styleUrls: ['./feed4.component.scss']
})
export class Feed4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToFeeds() {
    this.router.navigate(['feeds']);
  }

}

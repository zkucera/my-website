import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { getCurrencySymbol } from '@angular/common';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent implements OnInit {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebookF = faFacebookF;
  constructor() { }

  ngOnInit() {
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}

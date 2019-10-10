import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altum-tempus',
  templateUrl: './altum-tempus.component.html',
  styleUrls: ['./altum-tempus.component.css']
})
export class AltumTempusComponent implements OnInit {

  constructor() { }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }  
  

  ngOnInit() {
    //Get the button
    var mybutton = document.getElementById("backToTopButton");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }

  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adslide',
  templateUrl: './adslide.component.html',
  styleUrls: ['./adslide.component.scss']
})
export class AdslideComponent implements OnInit {

  slides: any;
  dots: any;
  dataRefresher: any;
  slideIndex: number = 1;
  slideArray: any = []
  saCounter: number = 1

  constructor() { }

  ngOnInit(): void {

    // Slide Array
    this.slides = document.querySelectorAll(".slide-item");
    this.dots = document.querySelectorAll(".dot");
    this.slides.forEach((s: any) => {
      this.saCounter++
      this.slideArray.push({ id: this.saCounter, slide: s })
    });

    this.slideShow()
  }

  // Fetch slide every 3 seconds
  slideShow() {
    this.dataRefresher = setInterval(() => {
      this.slideIndex++

      // loop through slides
      this.slideArray.forEach((i: any) => {
        // compare id's
        if (this.slideIndex === i.id) {
          i.slide.style.display = "block"
        }
        if (!(this.slideIndex === i.id)) {
          i.slide.style.display = "none"
        }
      })

      if (this.slideIndex > 3) {
        this.slideIndex = 1
      }
    }, 3000)
  }

}

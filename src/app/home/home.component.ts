import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  Images = [
    "assets/img/ananas.jpg",
    "assets/img/aubergine.jpg",
    "assets/img/bananes.jpg",
    "assets/img/carottes.jpg",
    "assets/img/cerises.jpg",
    "assets/img/courgettes.jpg"
  ];

  constructor() { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 1520,
    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    dots: true,
    navSpeed: 100,
    stagePadding: 10,
    lazyLoad: true,
    margin: 20,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        margin: 20,
        nav: true
      },
      400: {
        items: 1, 
        margin: 20,
        nav: true
      },
      740: {
        items: 2,
        margin: 20
      },
      940: {
        items: 3,
        margin: 20
      }
    },
    nav: true

  }

}

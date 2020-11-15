import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { OwlOptions } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  products;
  title = 'angularowlslider';
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.data.produits;
  }

  //pour le caroussel multiple + responsible
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
    stagePadding: 10,
    lazyLoad: true,
    margin: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      400: {
        items: 1,
        dots: false
      },
      740: {
        items: 2,
        // margin: 10
      },
      940: {
        items: 3,
        margin: 10
      }
    },
    nav: true

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-products',
  templateUrl: './liste-products.component.html',
  styleUrls: ['./liste-products.component.scss']
})
export class ListeProductsComponent implements OnInit {
  category;
  products = [];
  type;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.route.snapshot.params.type;
    this.data.produits.forEach(element => {
      if (element.cat == this.type) {
        this.products.push(element);
        this.category = this.type;
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  produits;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.produits = this.data.produits;
  }

}

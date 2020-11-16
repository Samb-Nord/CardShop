import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  productsCard;
  total;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.productsCard = this.data.productPanier;
    this.calculerTotal();
    this.data.obsTotal.subscribe(value => {
      if (value) {
        this.calculerTotal();
      }
    })
  }
  //méthode pour calculer le prix total du panier
  calculerTotal = () => {
    this.total = 0;
    this.productsCard.forEach(element => {
      let calcul = parseFloat(this.data.produits.find(p => p.id == element.id).prix) * element.qty + parseFloat(this.total);
      this.total = calcul.toFixed(2);
    });
  }

  //retirer le produit du panier
  delete = (id) => {
    let prod = this.productsCard.find(elt => elt.id == id);
    let index = this.productsCard.indexOf(prod);
    this.productsCard.splice(index, 1);
    this.data.obsTotal.next(true);
  }

  //diminuer la quantité du produit
  updateMoins = (id) => {
    let prod = this.productsCard.find(elt => elt.id == id);
    if (prod.qty > 1) {
      prod.qty--;
      this.data.obsTotal.next(true);
    }
    else {
      this.delete(id);
    }
  }

  //augmenter la quantité
  updatePlus = (id) => {
    let prod = this.productsCard.find(elt => elt.id == id);
    prod.qty++;
    this.data.obsTotal.next(true);
  }
}

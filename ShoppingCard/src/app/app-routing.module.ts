import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ListeProductsComponent } from './liste-products/liste-products.component';
import { PanierComponent } from './panier/panier.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: '', redirectTo : '/accueil', pathMatch : 'full'},
  {path: 'accueil', component : AccueilComponent},
  {path : 'catalog', component : CatalogComponent},
  {path : 'panier', component : PanierComponent},
  {path : 'search', component : SearchComponent},
  {path : 'liste/:type', component : ListeProductsComponent},
  {path : 'product/:id', component : DetailProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

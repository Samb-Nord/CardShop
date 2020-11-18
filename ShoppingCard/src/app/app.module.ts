import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ListeProductsComponent } from './liste-products/liste-products.component';
import { SearchComponent } from './search/search.component';
import { PanierComponent } from './panier/panier.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    CatalogComponent,
    DetailProduitComponent,
    ListeProductsComponent,
    SearchComponent,
    PanierComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

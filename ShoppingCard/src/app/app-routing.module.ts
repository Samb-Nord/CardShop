import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [
  {path: '', redirectTo : '/accueil', pathMatch : 'full'},
  {path: 'accueil', component : AccueilComponent},
  {path : 'catalog', component : CatalogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

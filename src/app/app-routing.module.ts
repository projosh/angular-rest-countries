import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCardsComponent } from './page-cards/page-cards.component';
import { PageTableComponent } from './page-table/page-table.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: PageAccueilComponent },
  { path: 'table', component: PageTableComponent },
  { path: 'cards', component: PageCardsComponent },
  { path: "", component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

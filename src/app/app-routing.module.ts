import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { NewCocktailComponent } from './new-cocktail/new-cocktail.component';

const routes: Routes = [
  {path: '', component: CocktailsComponent},
  {path: 'cocktails/new', component: NewCocktailComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

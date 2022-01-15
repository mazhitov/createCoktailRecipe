import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailItemComponent } from './cocktails/cocktail-item/cocktail-item.component';
import { NotFoundComponent } from './not-found.component';
import { ModalComponent } from './modal/modal.component';
import { NewCocktailComponent } from './new-cocktail/new-cocktail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateImgUrlDirective } from './new-cocktail/validate-img-url.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CocktailsComponent,
    NotFoundComponent,
    CocktailItemComponent,
    ModalComponent,
    ValidateImgUrlDirective,
    NewCocktailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

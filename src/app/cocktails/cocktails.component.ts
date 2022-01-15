import { Component, OnDestroy, OnInit } from '@angular/core';
import { CocktailsService } from '../shared/cocktails.service';
import { Cocktail } from '../shared/cocktail.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit, OnDestroy {
  cocktails: Cocktail[] = [];
  isFetching = false;
  cocktailsIsFetchingSubscription!:Subscription;
  cocktailsChangeSubscription!:Subscription;

  constructor(private cocktailsService:CocktailsService) { }

  ngOnInit(): void {
    this.cocktailsChangeSubscription = this.cocktailsService.cocktailsChange.subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    });

    this.cocktailsIsFetchingSubscription = this.cocktailsService.cocktailsIsFetching.subscribe((isFetching: boolean) => {
      this.isFetching = isFetching;
    });
    this.cocktailsService.fetchCocktails();
  }

  ngOnDestroy() {
    this.cocktailsChangeSubscription.unsubscribe();
    this.cocktailsIsFetchingSubscription.unsubscribe();
  }
}

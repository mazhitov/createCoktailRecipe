import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './cocktail.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  cocktailsIsFetching = new Subject<boolean>();
  cocktailsChange = new Subject<Cocktail[]>();

  private cocktails: Cocktail[] = [];

  constructor(private http: HttpClient) {}

  fetchCocktails() {
    this.cocktailsIsFetching.next(true);
    this.http.get<{ [id: string]: Cocktail }>('https://project-server-788da-default-rtdb.firebaseio.com/cocktails.json')
      .pipe(map(result => {
        if (result === null) {
          return [];
        }
        return Object.keys(result).map(id => {
          const cocktail = result[id];
          return new Cocktail(id, cocktail.name, cocktail.img, cocktail.type, cocktail.description,
            cocktail.ingredients, cocktail.makeDescription);
        });
      }))
      .subscribe(cocktails => {
        this.cocktails = cocktails;
        this.cocktailsChange.next(this.cocktails.slice());
        this.cocktailsIsFetching.next(false);
      }, () => {
        this.cocktailsIsFetching.next(false);
      });
  }

  addNewCocktail(cocktail: Cocktail) {
    const body ={
      name: cocktail.name,
      img: cocktail.img,
      type: cocktail.type,
      description: cocktail.description,
      ingredients: cocktail.ingredients,
      makeDescription: cocktail.makeDescription
    };
    return this.http.post('https://project-server-788da-default-rtdb.firebaseio.com/cocktails.json', body);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CocktailsService } from '../shared/cocktails.service';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-new-cocktail',
  templateUrl: './new-cocktail.component.html',
  styleUrls: ['./new-cocktail.component.css']
})
export class NewCocktailComponent implements OnInit {
  cocktailForm!: FormGroup;

  constructor(private cocktailsService: CocktailsService,
              private router: Router) { }

  ngOnInit(): void {
    this.cocktailForm = new FormGroup({
      name: new FormControl('', Validators.required),
      img: new FormControl('', [Validators.required]),
      type: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      ingredients: new FormArray([]),
      instructions: new FormControl('', Validators.required),
    });
  }

  postCocktail() {
    const newCocktail = new Cocktail(
      '',
      this.cocktailForm.get('name')?.value,
      this.cocktailForm.get('img')?.value,
      this.cocktailForm.get('type')?.value,
      this.cocktailForm.get('description')?.value,
      this.cocktailForm.get('ingredients')?.value,
      this.cocktailForm.get('instructions')?.value,
    );
    this.cocktailsService.addNewCocktail(newCocktail).subscribe(() => {
      void this.router.navigate(['/']);
    });
  }
  fieldHasError(fieldName: string, errorType:string) {
    const field = this.cocktailForm.get(fieldName);
    return Boolean(field && field.touched && field.errors?.[errorType]);
  }

  groupFieldHasError(i:number, fieldName:string, errorType:string) {
    const fieldArray = <FormArray>this.cocktailForm.get('ingredients');
    const fieldGroup = <FormGroup>fieldArray.controls[i];
    const field = fieldGroup.get(fieldName);
    return Boolean(field && field.touched && field.errors?.[errorType]);
  }

  AddIng() {
    const ingredients = <FormArray>this.cocktailForm.get('ingredients');
    const ingredientsGroup = new FormGroup({
      ingName: new FormControl('', Validators.required),
      amount: new FormControl(0, Validators.required),
      unit: new FormControl('', Validators.required),
    });
    ingredients.push(ingredientsGroup);
  }

  getControls() {
    const ingredients = <FormArray>this.cocktailForm.get('ingredients');
    return ingredients.controls;
  }

  deleteIng(i: number) {
    const ingredients = <FormArray>this.cocktailForm.get('ingredients');
    ingredients.removeAt(i);
  }
}

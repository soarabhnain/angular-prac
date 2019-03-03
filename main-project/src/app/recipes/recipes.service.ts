import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Diet Chicken',
    'Lots of protein and no unnecessary fats.',
    'https://s.doctoroz.com/recipe/lemon-chicken.jpg',
    [
      new Ingredient('Chicken', 200),
      new Ingredient('Black Pepper', 20)
    ] ),
    new Recipe('Veg Fried Rice',
    'This veg fried rice is best for diet',
    'https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg',
    [
      new Ingredient('Rice', 105),
      new Ingredient('Paneer', 100)
    ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}

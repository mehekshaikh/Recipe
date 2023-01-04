import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();


recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/puttanesca-cfb4e42.jpg?quality=90&webp=true&resize=440,400'),
  new Recipe('Another Test Recipe', 'This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2021/11/Cheesy-spinach-and-artichoke-dip-e9fce9e.jpg?quality=90&webp=true&resize=900,817')
];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
  }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('walla', 'wallawalla', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
              new Recipe('walla', 'wallawalla', 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg') ];

  constructor() { }

  ngOnInit() {
  }

}

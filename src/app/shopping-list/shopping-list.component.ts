import {Component, Input, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListtComponent implements OnInit {

  ingredients: Ingredient [] = [new Ingredient('walla', 8)];

  onAddButtonFired(item: Ingredient) {
      this.ingredients.push(item);
  }

  constructor() { }

  ngOnInit() {
  }

}

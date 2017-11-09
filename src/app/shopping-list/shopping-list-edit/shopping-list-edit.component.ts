import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  name = '';
  amount: number;
  @Output() clickedAddButton = new EventEmitter<Ingredient>();

  onAdd() {
    this.clickedAddButton.emit(
      new Ingredient(this.name, this.amount)
    );
  }

  constructor() { }

  ngOnInit() {
  }

}

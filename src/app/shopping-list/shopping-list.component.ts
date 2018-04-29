import { Component } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';


@Component ({
   selector:'app-shopping-list',
   templateUrl:'./shopping-list.component.html',
   styleUrls:['./shopping-list.component.css']
})

export class ShoppingListComponent {

   Ingredients: ingredient[] = [
       new ingredient ('Redline', 10),
       new ingredient ('Meduza', 2),
       new ingredient ('Dragon Lore', 6)
   ];

}
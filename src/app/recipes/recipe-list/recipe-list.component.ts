import { Recipe } from './../recipe.model';
import { Component} from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{

  recipes: Recipe[] = [
    new Recipe('Asiimov', 'This is how to make awp asiimov','https://vignette.wikia.nocookie.net/cswikia/images/8/8d/AWP_asiimov_market.png/revision/latest?cb=20140222075045'),
    new Recipe('Asiimov', 'This is how to make awp asiimov','https://vignette.wikia.nocookie.net/cswikia/images/8/8d/AWP_asiimov_market.png/revision/latest?cb=20140222075045')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

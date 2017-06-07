import { Component, OnInit } from '@angular/core';
import { Category } from './category';

import { CategoryService } from './category.service';


//import { CATEGORIES } from './categories'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Budget App';
  categories: Category[];
  total: number;

  constructor(private categoryService: CategoryService){}

  ngOnInit():void{

	this.categories = this.categoryService.getCategories();
	this.total = this.categoryService.getTotal();

  }

 // categories = CATEGORIES;

 //*ng

}

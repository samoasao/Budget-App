import { Component, OnInit } from '@angular/core';

import{ Category } from './category'
import { CategoryService } from './category.service'



@Component({
  
  selector: 'my-categories',
  templateUrl: './categories.component.html'

})

export class CategoriesComponent{
	categories:Category[];
	total:number;

	constructor(private categoryService: CategoryService){}

	ngOnInit():void{
		this.categories = this.categoryService.getCategories();
		this.total = this.categoryService.getTotal();
	}
	
}
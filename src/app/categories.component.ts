import { Component, OnInit, Input } from '@angular/core';

import{ Category } from './category'
import { CategoryService } from './category.service'



@Component({
  
  selector: 'my-categories',
  templateUrl: './categories.component.html'

})

export class CategoriesComponent{
	categories:Category[];
	total:number;
	editMode:boolean;

	constructor(private categoryService: CategoryService){}

	ngOnInit():void{
		this.categories = this.categoryService.getCategories();
		this.total = this.categoryService.getTotal();
		this.editMode = false;
	}

	editButtonClick(): void {
		this.editMode = true;
	}

	saveButtonClick(): void {
		this.total = this.categoryService.getTotal();
		this.editMode = false;
		
	}

	@Input() category:Category;
	
}
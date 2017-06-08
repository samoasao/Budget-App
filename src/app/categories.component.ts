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
	addMode:boolean;

	constructor(private categoryService: CategoryService){}

	ngOnInit():void{
		this.categories = this.categoryService.getCategories();
		this.setTotal();
		this.editMode = false;
		this.addMode = false;
	}

	editButtonClick(): void {
		this.editMode = true;
		this.addMode = false;
		this.setTotal();
	}

	addButtonClick(): void {
		this.editMode = false;
		this.addMode = true;
		this.setTotal();
	}

	addCategoryClick(name: string, balance: number): void {
		
		name = name.trim();
		if (!name) { return; }
   		if (!balance) {balance = 0}
   		balance = +balance;
		this.categoryService.addCategory(name, +balance);
		this.setTotal();
		this.addMode = false;
	}

	setTotal():void{
		this.total = this.categoryService.getTotal();
	}

	saveButtonClick(): void {
		this.setTotal();
		this.editMode = false;
		this.addMode = false;
	}

	@Input() category:Category;
	
}
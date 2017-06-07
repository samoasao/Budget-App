import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CategoryService } from './category.service';
import { CategoriesComponent } from './categories.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

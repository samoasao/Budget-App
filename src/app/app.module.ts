import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CategoryService } from './category.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

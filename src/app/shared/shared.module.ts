import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCoverComponent } from './book-cover/book-cover.component';
import {BookListItemsComponent} from "./book-list-items/book-list-items.component";



@NgModule({
  declarations: [
    BookCoverComponent,
    BookListItemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BookCoverComponent,
    BookListItemsComponent
  ]
})
export class SharedModule { }

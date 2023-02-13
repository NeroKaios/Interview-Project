import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksListComponent} from "./list-page/books-list.component";
import {PaginationButtonComponent} from "./pagination-button/pagination-button.component";
import {BookSearchModule} from "../book-search/book-search.module";
import {BookCardModule} from "../book-card/book-card.module";



@NgModule({
  declarations: [
    BooksListComponent,
    PaginationButtonComponent
  ],
  imports: [
    BookSearchModule,
    BookCardModule,
    CommonModule
  ]
})
export class BookListModule { }

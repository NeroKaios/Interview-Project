import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookCardModule} from "./book-card/book-card.module";
import {BookSearchModule} from "./book-search/book-search.module";
import {BookListModule} from "./book-list/book-list.module";
import {BookApiService} from "../core/services/BookApi/book-api.service";
import {FeaturesRoutingModule} from "./features-routing.module";
import {BookCardContentComponent} from "./book-card/card-content/book-card-content.component";
import {BookDetailsModule} from "./book-details/book-details.module";



@NgModule({

  imports: [
    FeaturesRoutingModule,
    CommonModule,
    BookCardModule,
    BookSearchModule,
    BookListModule,
    BookDetailsModule
  ],
  exports:[
    BookCardModule,
    BookSearchModule,
    BookListModule,
    BookDetailsModule
  ],
  providers:[BookApiService]
})
export class FeaturesModule { }

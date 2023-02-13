import {Component, OnInit} from '@angular/core';
import {CollectionResultModel} from "../../../core/models/collection-result.interface";
import {Volume} from "../../../core/models/volume.interface";
import {SearchParams} from "../../../core/models/search-params.interface";
import {BookApiService} from "../../../core/services/BookApi/book-api.service";
import {debounceTime, distinctUntilChanged, map, Subject} from "rxjs";


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit{
  displayedNumberOfBooks: number | undefined = 0;
  booksCollection: CollectionResultModel<Volume[]> | null = null;
  searchParams: SearchParams = {
    searchTerm : "Example Search",
    startIndex : 0
  };
  paginationStep: number = 0;

  booksApi$ : Subject<any> = new Subject<any>();


  constructor(private booksApi: BookApiService) {
  }

  ngOnInit(): void {
        this.booksApi.getBooks(this.searchParams).subscribe(
          response => {
            this.booksCollection = response
          }
        )
    }

  getSearchParams(data: SearchParams | null): void {
    if (!data) {
      return;
    }
    this.searchParams = data;
    this.searchParams.startIndex = 0;
    this.loadBooksCollection()
  }

  onPreviousPageClick(): void {
    window.scrollTo(0, 0);
    if (!this.searchParams) {
      return;
    }

    if (this.searchParams.startIndex > 0) {
      this.searchParams.startIndex -= this.paginationStep!;
      this.loadBooksCollection();
    }
  }

  onNextPageClick(): void {
    window.scrollTo(0, 0);
    if (!this.searchParams || !this.booksCollection?.totalItems) {
      return;
    }

    if (
      this.searchParams.startIndex <
      this.booksCollection.totalItems - this.paginationStep!
    ) {
      this.searchParams.startIndex += this.paginationStep!;
      this.loadBooksCollection();
    }
  }

  changeNumberOfBooks(numberOfBooks: number): void {
    this.displayedNumberOfBooks = numberOfBooks;
    this.paginationStep = numberOfBooks;
  }

  private loadBooksCollection(): void {
    if (this.searchParams) {
      this.booksApi.getBooks(this.searchParams).subscribe({
          next: (response: any) => {
            if (response) {
              this.booksCollection = response;
            }
          }
        })
    }
  }
}

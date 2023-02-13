import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BookApiService} from "../../../core/services/BookApi/book-api.service";
import {Volume} from "../../../core/models/volume.interface";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  volume: Volume | null = null;
  forSaleIdentifier = 'FOR_SALE';

  constructor(
    private route: ActivatedRoute,
    private booksApi: BookApiService,
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (!bookId) {
      return;
    }
    this.booksApi.getBook(bookId).subscribe({
      next: (response) => {
        this.volume = response;
      }
    });
  }
}

import { Injectable } from '@angular/core';
import {Observable, shareReplay} from "rxjs";
import {SearchParams} from "../../models/search-params.interface";
import {Volume} from "../../models/volume.interface";
import {HttpClient} from "@angular/common/http";
import {CollectionResultModel} from "../../models/collection-result.interface";

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http: HttpClient) { }

  private url = 'https://www.googleapis.com/books/v1/volumes';
  public getBooks(searchParams: SearchParams): Observable<CollectionResultModel<Volume[]>> {
    return this.http.get<CollectionResultModel<Volume[]>>(this.url, {
      params: {
      ...(searchParams.searchTerm && {q: searchParams.searchTerm}),
        startIndex: searchParams.startIndex
      },
    })
  }
  public getBook(bookId: string): Observable<Volume> {
    return this.http.get<Volume>(`${this.url}/${bookId}`);
  }
}

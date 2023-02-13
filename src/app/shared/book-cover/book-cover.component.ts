import {Component, Input, OnInit} from '@angular/core';
import {ImageLinks} from "../../core/models/volumeInfo/image-links.interface";

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.scss']
})
export class BookCoverComponent{
  @Input() imageLinks?: ImageLinks;

  public placeholderImageUrl =
    "https://via.placeholder.com/250/000000/FFFFFF/?text=ImageNotFound";
}

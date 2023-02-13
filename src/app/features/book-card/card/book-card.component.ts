import { Component, Input } from '@angular/core';
import {Volume} from "../../../core/models/volume.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() volume: Volume | null = null;

  constructor(private router : Router) {
  }
  openBookDetailPage(): void {
    if (this.volume?.id) {
      this.router.navigate([`/book-detail/${this.volume.id}`])
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookCardComponent} from "./card/book-card.component";
import {BookCardContentComponent} from "./card-content/book-card-content.component";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    BookCardComponent,
    BookCardContentComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule
  ],
  exports:[
    BookCardComponent,
    BookCardContentComponent
  ]
})
export class BookCardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookDetailComponent} from "./detail-page/book-detail.component";
import {BookDetailContentComponent} from "./detail-content/book-detail-content.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    BookDetailComponent,
    BookDetailContentComponent
  ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule
    ],
  exports:[
    BookDetailComponent,
    BookDetailContentComponent
  ]
})
export class BookDetailsModule { }

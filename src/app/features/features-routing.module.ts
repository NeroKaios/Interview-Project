import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookDetailComponent} from "./book-details/detail-page/book-detail.component";
import {BooksListComponent} from "./book-list/list-page/books-list.component";


const routes: Routes = [
  {
    path: 'books-list',
    component: BooksListComponent,
  },
  {
    path: 'book-detail/:id',
    component: BookDetailComponent,
  },
  {
    path: '',
    redirectTo: 'books-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: BooksListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}

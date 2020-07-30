import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail.component';
import { BookAddComponent } from './books/book-add.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'add', component: BookAddComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

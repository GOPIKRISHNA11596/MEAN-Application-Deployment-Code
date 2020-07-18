import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private bookUrl = 'assets/api/books/books.json';
  baseUri:string = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  getBooks(): Observable<Book[]> {
    let url = `${this.baseUri}/books`;
     //return this.http.get<Book[]>(this.bookUrl).pipe(
    return this.http.get<Book[]>(url).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getBook(id: number): Observable<Book | undefined> {
    return this.getBooks()
      .pipe(
        map((books: Book[]) => books.find(p => p.ID === id))
      );
  }

   addBook(book : Book[]): Observable<Book[]> {
    //let url = `${this.baseUri}/books/add`;
    let url = `${this.bookUrl}/books/add`;


    return this.http.post<Book[]>(url, book);
    // .pipe(
    //    tap((book:Book) => console.log('Added successfully : '+book.ID)),
    //    catchError(this.handleError)
    //  );
 }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}

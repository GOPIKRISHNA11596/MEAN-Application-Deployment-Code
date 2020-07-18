import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/Router';
import { Book } from './book';
import { BookService } from './book.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  pageTitle : string = 'Book Details';
  imageWidth : number = 200;
  imageMargin : number = 2;
  errorMessage = '';
  book : Book | undefined;

  constructor(private route : ActivatedRoute,
              private router: Router,
              private bookService: BookService) {
   }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getBook(id);
    }
  }

  getBook(id: number) {
    this.bookService.getBook(id).subscribe({
      next: book => this.book = book,
      error: err => this.errorMessage = err
    });
  }


  onBack(): void {
    this.router.navigate(['/books']);
  }

}

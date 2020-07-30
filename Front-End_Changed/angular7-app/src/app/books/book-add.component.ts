import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { BookService } from './book.service';
import { Book } from './book';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";



@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})

export class BookAddComponent implements OnInit {

  pageTitle = 'Add New Book ';

  constructor(private bookService : BookService,
              private router : Router,
              private formBuilder: FormBuilder) { }

  addForm: FormGroup;
  submitted = false;
  book : Book[];

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
    ID: [],
    BookName : ['', Validators.required],
    AuthorName: ['', Validators.required],
    Category: ['', Validators.required],
    Price: ['', Validators.required]
  });
  }



  // onSave() : void{
  //   this.router.navigate(['/books']);
  // }

  onSubmit(){
    this.submitted = true;

    if(this.addForm.valid){
      this.bookService.addBook(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['/books']);
      });
    }
  }

  get f() { return this.addForm.controls; }
}

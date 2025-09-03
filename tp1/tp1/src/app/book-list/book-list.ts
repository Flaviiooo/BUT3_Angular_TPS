import { Component } from '@angular/core';
import { BookService } from '../service/bookService/book-service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {
  constructor(private bookService: BookService) {
    this.books = this.bookService.getAll();
    console.log(this.books);
  }

  books: Book[] = [];

}


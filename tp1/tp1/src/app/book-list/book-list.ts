import { Component } from '@angular/core';
import { BookService } from '../service/bookService/book-service';
import { Book } from '../model/book';
import { FormatDatePipe } from '../format-date-pipe';

@Component({
  selector: 'app-book-list',
  imports: [FormatDatePipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {

    books: Book[] = [];

  constructor(protected bookService: BookService) {
  }

  ngOnInit(){
    this.books = this.bookService.getAll();
  }


}


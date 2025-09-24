import { Component } from '@angular/core';
import { BookService } from '../../service/bookService/book-service';
import { Book } from '../../model/book';
import { FormatDatePipe } from '../../pipe/format-date-pipe';
import { ApiService } from '../../service/api/api-service';

@Component({
  selector: 'app-book-list',
  imports: [FormatDatePipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {
    books: Book[] = [];

  constructor(protected bookService: BookService, protected apiService: ApiService) {
  }

  ngOnInit(){
    this.books = this.bookService.getAll();
  }


}


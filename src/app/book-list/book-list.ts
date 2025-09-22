import { Component } from '@angular/core';
import { BookService } from '../service/bookService/book-service';
import { Book } from '../model/book';
import { FormatDatePipe } from '../pipe/format-date-pipe';
import { ApiService } from '../service/api/api-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  imports: [FormatDatePipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {
  private sub: Subscription = new Subscription();
    books: Book[] = [];

  constructor(protected bookService: BookService, protected apiService: ApiService) {
  }

  ngOnInit(){
    this.books = this.bookService.getAll();
    this.sub.add(
      this.apiService.getApiBooks().subscribe({
        next: books => this.books = books,
        error: errors => console.error("Erreur de récupération", errors)
      })
    );
  }


}


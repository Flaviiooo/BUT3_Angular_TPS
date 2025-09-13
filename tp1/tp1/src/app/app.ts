import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookList } from '../app/book-list/book-list'
import { BookForm } from './book-form/book-form';
import {BookService} from './service/bookService/book-service';
import { Book } from './model/book';
import { Navbar } from './navbar/navbar'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookList, BookForm, Navbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp1');

  constructor(protected bookService: BookService) {}

  onBookCreated(book: Book) {
    this.bookService.addBook(book);
  }
}

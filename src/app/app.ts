import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookService} from './service/bookService/book-service';
import { Book } from './model/book';
import { Navbar } from './navbar/navbar'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar
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

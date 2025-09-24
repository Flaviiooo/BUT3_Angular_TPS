import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Book } from '../../model/book';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { BookService } from '../../service/bookService/book-service';


@Component({
  selector: 'app-book-item',
  imports: [RouterLink, MatIconModule],
  templateUrl: './book-item.html',
  styleUrl: './book-item.css'
})
export class BookItem {
  @Input() book!: Book; 

  constructor(private bookService: BookService){}
  deleteBook(){
    this.bookService.deleteBook(this.book);
  }
  
}

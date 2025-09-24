import { Component } from '@angular/core';
import { BookService } from '../../service/bookService/book-service';
import { Book } from '../../model/book';
import { ApiService } from '../../service/api/api-service';
import { BookItem } from '../book-item/book-item';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-book-list',
  imports: [BookItem, MatPaginatorModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {
    books: Book[] = [];
    dataSource = new MatTableDataSource(this.books);

  constructor(protected bookService: BookService, protected apiService: ApiService) {
  }

  ngOnInit(){
    this.books = this.bookService.getAll();
  }


}


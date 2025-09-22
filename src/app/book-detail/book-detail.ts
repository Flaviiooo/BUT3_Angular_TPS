import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../service/bookService/book-service';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail {
  private route = inject(ActivatedRoute);
  bookId: number = 0;
  private book!: Book;

  constructor(private apiService:BookService){
  }
  ngOnInit(){
    this.bookId = Number(this.route.snapshot.params['id']);
    // TODO : Fecth API books with books
    this.book = this.apiService.getBook(this.bookId);
  }
}

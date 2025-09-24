import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../model/book';
import { BookService } from '../../service/bookService/book-service';
import { ApiService } from '../../service/api/api-service';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail {
  private route = inject(ActivatedRoute);
  bookId: number = 0;
  protected book!: Book;

  constructor(private bookService:BookService, private apiService:ApiService){
  }
  ngOnInit(){
      // TODO : Passer la logique au Book Service au lieu du composant
    this.bookId = Number(this.route.snapshot.params['id']);
    this.apiService.getApiBook(this.bookId).subscribe({
      next: book => {this.book = book; console.log(this.book)},
      error: errors =>  {throw new Error(`Error: Cannot find book with id ${this.bookId}`)}
    })
  }
}

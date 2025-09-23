import { Injectable } from '@angular/core';
import { Book } from '../../model/book';
import { ApiService } from '../api/api-service';

const BOOKS: Book[] = [
  <Book>{ id: 1, title: '1984', author: 'George Orwell', publicationDate: new Date('1949-06-08') },
   <Book>{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationDate: new Date('1960-07-11') },
   <Book>{ id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationDate: new Date('1925-04-10') }
]

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private apiService : ApiService){
    this.apiService.getApiBooks().subscribe({
      next: books  => { books.map( book => this.books.push(book))},
      error: errors => console.log(errors)
    })
  }
  
  private books: Book[] = BOOKS;

  getAll(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    if(book.id === 0){
        book.id = Math.max(...this.books.map(b => b.id)) + 1;
      }
    for( const item of this.books){
      if( item.title === book.title && item.author === book.author){
        console.log("Book already exist");
        return;
      }
    }
    this.books.push(book);
    this.apiService.addApiBook(book).subscribe({
      next: res => console.log("Ajout réussi :", res),
      error: errors => console.log(errors)
    })
    }

    getBook(id: number): Book  {
     let book = this.books.find( book => book.id === Number(id));
     if(!book){
      throw new Error(`Error: Cannot find book with id ${id}`);
     }
     return book;
    }

}

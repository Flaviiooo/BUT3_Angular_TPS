import { Injectable } from '@angular/core';
import { Book } from '../../model/book';

const BOOKS: Book[] = [
  <Book>{ id: 1, title: '1984', author: 'George Orwell', publicationDate: new Date('1949-06-08') },
   <Book>{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationDate: new Date('1960-07-11') },
   <Book>{ id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationDate: new Date('1925-04-10') }
]

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = BOOKS;

  getAll(): Book[] {
    return this.books;
  }

}

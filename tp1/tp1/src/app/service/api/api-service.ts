import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../model/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http: HttpClient = inject(HttpClient);
  private myApiBaseUrl: string = "https://68cc3c3c716562cf5076f5b5.mockapi.io/angular/book";
  private defaultApi: string = "https://66e8848bb17821a9d9dcf68c.mockapi.io/books";

getApiBooks(): Observable<Book[]> {
  return this.http.get<any[]>(this.defaultApi);
}

// Transformer en book
/* .pipe(
    map(items =>
      items.map(item => ({
        id: Number(item.id), 
        title: item.title,
        author: item.author,
        publicationDate: new Date(item.publicationDate)
      }))
    )
  );
*/
  addApiBook(book: Book): void{
    this.http.post(this.myApiBaseUrl,book);
  }

  
}

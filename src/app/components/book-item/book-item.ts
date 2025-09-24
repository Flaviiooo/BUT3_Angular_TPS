import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Book } from '../../model/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-item',
  imports: [RouterLink],
  templateUrl: './book-item.html',
  styleUrl: './book-item.css'
})
export class BookItem {
  @Input() book!: Book; 

  
}

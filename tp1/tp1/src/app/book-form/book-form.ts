import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../service/bookService/book-service';
import { Output, EventEmitter } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookForm {
  bookForm: FormGroup ;

  @Output() bookCreated = new EventEmitter<Book>();

  constructor(private fb: FormBuilder, protected bookService: BookService) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publicationDate: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log("Before emit:", this.bookForm.value);
      this.bookCreated.emit(this.bookForm.value);

    }
    else {
      console.log("Formulaire invalide");
    }
  }
}

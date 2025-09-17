import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Book } from '../model/book';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';


@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDatepickerModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookForm {
  bookForm: FormGroup ;

  @Output() bookCreated = new EventEmitter<Book>();

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publicationDate: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookCreated.emit(this.bookForm.value);
    }
    else {
      console.log("Formulaire invalide");
    }
  }
}

import { Routes } from '@angular/router';
import { BookDetail } from './book-detail/book-detail';
import { App } from './app';
import { BookList } from './book-list/book-list';
import { BookForm } from './book-form/book-form';

export const routes: Routes = [
    { path: 'books', component: BookList },
    { path: 'book/add', component: BookForm},
    { path: 'book/:id', component: BookDetail},

];

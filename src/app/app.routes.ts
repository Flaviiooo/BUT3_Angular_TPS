import { Routes } from '@angular/router';
import { BookDetail } from './components/book-detail/book-detail';
import { BookList } from './components/book-list/book-list';
import { BookForm } from './components/book-form/book-form';
import { ErrorPage } from './components/error-page/error-page';
import { App } from './app';

export const routes: Routes = [
    { path: 'books', component: BookList },
    { path: 'book/add', component: BookForm},
    { path: 'book/:id', component: BookDetail},
    { path: '**', component: ErrorPage} 

];

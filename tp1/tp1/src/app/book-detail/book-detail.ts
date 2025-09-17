import { Component, inject } from '@angular/core';
import { Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail {
  private route = inject(ActivatedRoute);
  bookId: number = 0;

  ngOnInit(){
    this.bookId = Number(this.route.snapshot.params['id']);
    
    console.log(this.bookId);
  }
}

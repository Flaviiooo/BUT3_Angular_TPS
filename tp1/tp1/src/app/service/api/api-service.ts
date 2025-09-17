import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../model/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient){
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Book } from '../types/books';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private booksService: BooksService) { }

  cart: Book[] = [];



  isShowing: boolean = true;

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

}

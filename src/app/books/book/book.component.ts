import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../types/books';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {

  @Input()   book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.bookEmitter.emit(this.book);
  }

}

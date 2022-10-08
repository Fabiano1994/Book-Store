import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return[
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image: './assets/img/clean-code.jpg',
        amount: 10.99,
      },
      {
        name: 'Pragmatic Programmer',
        author: 'David Thomas',
        image: './assets/img/pragmatic-programmer.jpg',
        amount: 12.99,
      },
      {
        name: 'Art Of Computer Programming',
        author: 'Donald E Knuth',
        image: './assets/img/art-programming.jpg',
        amount: 111.99,
      },
      {
        name: 'Introduction to Algorithms',
        author: 'T Cormen',
        image: './assets/img/intro-algo.jpg',
        amount: 15.99,
      }
    ]

  }
}

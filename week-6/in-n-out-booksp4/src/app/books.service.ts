/**
 * Title: books.service.ts
 * Author: Zahava Gopin
 * Date: 23 June 2023
 * Description: Service class for book objects
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780061120084',
        title: 'To Kill a Mockingbird',
        description: 'Set in the 1930s, this Pulitzer Prize-winning novel by Harper Lee explores racial injustice and moral growth through the eyes of Scout Finch, a young girl in Alabama.',
        numOfPages: 336,
        authors: ['Harper Lee']
      },
      {
        isbn: '9780451524935',
        title: '1984',
        description: "George Orwell's dystopian classic depicts a totalitarian society where Big Brother watches citizens, and individuality and freedom are suppressed.",
        numOfPages: 328,
        authors: [' George Orwell']
      },
      {
        isbn: '9780141439518',
        title: 'Pride and Prejudice',
        description: "Jane Austen's beloved novel follows the spirited Elizabeth Bennet as she navigates social norms, love, and the clash between pride and prejudice in 19th-century England.",
        numOfPages: 480,
        authors: ['Jane Austen']
      },
      {
        isbn: '9780743273565',
        title: 'The Great Gatsby',
        description: "F. Scott Fitzgerald's masterpiece paints a picture of the Roaring Twenties, capturing the allure, decadence, and tragic consequences of the American Dream through the enigmatic Jay Gatsby.",
        numOfPages:  180,
        authors: [' F. Scott Fitzgerald']
      },
      {
        isbn: '9780618640157',
        title: 'The Lord of the Rings',
        description: "J.R.R. Tolkien's epic fantasy trilogy takes readers on a journey through Middle-earth as Frodo Baggins and his companions battle against the dark forces of Sauron to destroy the One Ring.",
        numOfPages: 1216,
        authors: [' J.R.R. Tolkien']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}

/**
 * Title: book.interface.ts
 * Author: Zahava Gopin
 * Date: 23 June 2023
 * Description: Book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}

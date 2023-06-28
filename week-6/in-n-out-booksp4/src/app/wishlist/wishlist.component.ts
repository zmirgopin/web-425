/**
 * Title: wishlist.component.ts
 * Author: Zahava Gopin
 * Date: 28 June 2023
 * Description: Wishlist component (Wishlist page)
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> =[]
  constructor() { }


  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem){
    this.items.push(item);
  }

}

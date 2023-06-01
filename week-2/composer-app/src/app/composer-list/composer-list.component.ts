/**
 * Title: composer-list.component.ts
 * Author: Zahava Gopin
 * Date: 1 June 2023
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Franz Joseph Haydn", "Classical"),
      new Composer("Frederic Chopin", "Romantic"),
      new Composer("Franz Schubert", "Romantic"),
      new Composer("Igor Stravinsky", " 20th Century"),
      new Composer("Claude Debussy", "Impressionist/Early 20th Century")
    ]
  }

  ngOnInit(): void {
  }

}

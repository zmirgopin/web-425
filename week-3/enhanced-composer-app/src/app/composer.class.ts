/**
 * Title: composer.class.ts
 * Author: Zahava Gopin
 * Date: 6 June 2023
 * Description: Class file for the Composer object
 */

import { IComposer } from './composer.interface';

export class Composer {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Franz Joseph Haydn", genre: "Classical"},
      {composerId: 101, fullName: "Frederic Chopin", genre: "Romantic"},
      {composerId: 102, fullName: "Franz Schubert", genre: "Romantic"},
      {composerId: 103, fullName: "Igor Stravinsky", genre: "20th Century"},
      {composerId: 104, fullName: "Claude Debussy", genre: "Impressionist/Early 20th Century"}
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}

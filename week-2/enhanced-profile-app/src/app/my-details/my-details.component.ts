/**
 * Title: my-details.component.ts
 * Author: Zahava Gopin
 * Date: 30 May 2023
 * Description: My details component
 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", `#${new Date().getFullYear()}`, "#CodingWithAngular", "#ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Zahava Gopin", "Sushi", "Purple");
  }

  ngOnInit(): void {
  }

}

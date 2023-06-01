/**
 * Title: app.component.ts
 * Author: Zahava Gopin
 * Date: 30 May 2023
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = true;

  assignment: string = 'Exercise 2.3 - Data Binding';
}

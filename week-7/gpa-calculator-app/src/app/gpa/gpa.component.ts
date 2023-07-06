/**
 * Title: gpa.component.ts
 * Author: Zahava Gopin
 * Date: 28 June 2023
 * Description: gpa layout
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;
  constructor() { }

  ngOnInit(): void {
  }

}

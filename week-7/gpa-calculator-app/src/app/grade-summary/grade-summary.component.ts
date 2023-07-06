/**
 * Title:grade-summary.component.ts
 * Author: Zahava Gopin
 * Date: 28 June 2023
 * Description: grade component
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;


  constructor() { }

  ngOnInit(): void {
  }

}

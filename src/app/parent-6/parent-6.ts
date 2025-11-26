import { Component } from '@angular/core';
import { Child6 } from '../child-6/child-6';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-6',
  imports: [Child6,FormsModule],
  templateUrl: './parent-6.html',
  styleUrl: './parent-6.css',
})
export class Parent6 {
  price = 100;
}

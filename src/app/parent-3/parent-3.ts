import { Component } from '@angular/core';
import { Child3 } from '../child-3/child-3';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-3',
  standalone: true,
  imports: [Child3, FormsModule, CommonModule],
  templateUrl: './parent-3.html',
  styleUrl: './parent-3.css',
})
export class Parent3 {
 receivedData = '';

  
 Data(value: string) {
   this.receivedData = value;
 }


}

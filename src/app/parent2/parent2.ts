import { Component } from '@angular/core';
import { Child2 } from '../child2/child2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent2',
  imports: [Child2, CommonModule],
  templateUrl: './parent2.html',
  styleUrls: ['./parent2.css'],
  standalone: true,
})
export class Parent2 {
  receivedDate = '';

  DataFromChild(value:string){
    this.receivedDate = value;
  }
}

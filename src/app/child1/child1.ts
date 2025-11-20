import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  imports: [CommonModule],
  templateUrl: './child1.html',
  styleUrls: ['./child1.css'],
  standalone:true,
})
export class Child1 {
 @Input() username : string = '';
}

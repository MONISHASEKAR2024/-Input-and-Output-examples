import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.css',
})
export class NgStyle {
  isError: boolean = true;
}

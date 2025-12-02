import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule],
  templateUrl: './ng-class.html',
  styleUrl: './ng-class.css',
})
export class NgClass {

  isActive: boolean = true;

  toggleActive(){
    this.isActive = !this.isActive;
  }
}

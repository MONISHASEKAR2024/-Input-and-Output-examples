import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-ng-for-1',
  imports: [CommonModule],
  templateUrl: './ng-for-1.html',
  styleUrl: './ng-for-1.css',
})
export class NgFor1 {
  items = ['A', 'B', 'C', 'D'];


  products = [
    { id: 1, name: "Mobile" },
    { id: 2, name: "Laptop" },
    {id: 3, name: "desktop"}
  ];

  trackProduct(index: number, item: any) {
    debugger;
    return item.id;
  }
}

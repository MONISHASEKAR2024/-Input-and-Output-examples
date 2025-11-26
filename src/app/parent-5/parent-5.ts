import { Component } from '@angular/core';
import { Child5 } from "../child-5/child-5";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-5',
  imports: [Child5,CommonModule, FormsModule],
  templateUrl: './parent-5.html',
  styleUrl: './parent-5.css',
})
export class Parent5 {

  Products = { name: 'paint',
    id:3,
    price : 200
  }

  OnSend(items : any){
    this.Products = { ...items}
  }

}

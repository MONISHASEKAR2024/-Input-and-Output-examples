import { Component } from '@angular/core';
import { Child9 } from "../child-9/child-9";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-9',
  standalone: true,
  imports: [Child9, CommonModule],
  templateUrl: './parent-9.html',
  styleUrls: ['./parent-9.css'],
})
export class Parent9 {
 
  product = {
    name: '',
    price: -10
  };

  ErrorList: string[]= [];

  receiveError(err:string[]){
    this.ErrorList = err
  };
}

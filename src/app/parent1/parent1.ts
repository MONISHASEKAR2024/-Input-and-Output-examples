import { Component } from '@angular/core';
import { Child1 } from '../child1/child1';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent1',
  imports: [Child1, FormsModule, CommonModule],
  templateUrl: './parent1.html',
  styleUrls: ['./parent1.css'],
  standalone: true,
})
export class Parent1 {
  

  userName: string = '';
  enteredName : string = '';

  OnClick(){
    this.userName = this.enteredName;
  }
  OnEnter(event:KeyboardEvent){
    if(event.key === 'Enter')
      this.OnClick();
  }
}

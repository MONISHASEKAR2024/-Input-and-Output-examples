import { Component } from '@angular/core';
import { Child1 } from '../child1/child1';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent1',
  imports: [Child1, FormsModule],
  templateUrl: './parent1.html',
  styleUrls: ['./parent1.css'],
  standalone: true,
})
export class Parent1 {
  

  userName: string = '';
  enteredName : string = '';

  OnClick(){
    this.enteredName = this.userName;
  }
}

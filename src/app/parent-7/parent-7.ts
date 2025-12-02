import { Component } from '@angular/core';
import { Child7 } from '../child-7/child-7';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-parent-7',
  standalone: true,
  imports: [Child7, NgIf],
  templateUrl: './parent-7.html',
  styleUrls: ['./parent-7.css'],
})
export class Parent7 {
  TicketAmount = -20;
  errorMsg = '';

  ShowErrorMsg(msg: string){
    this.errorMsg = msg;
  }
}

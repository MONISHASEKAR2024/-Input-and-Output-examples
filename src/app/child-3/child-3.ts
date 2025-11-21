import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-3',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child-3.html',
  styleUrl: './child-3.css',
})
export class Child3 {
  message= '';
  @Output () sendmessage = new EventEmitter <string>();

  OnSend(){
    this.sendmessage.emit(this.message);
    this.message = '';
  }



}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-6',
  imports: [],
  templateUrl: './child-6.html',
  styleUrl: './child-6.css',
})
export class Child6 {
  @Input () value : number=0;
   @Output () valueChange = new EventEmitter <number>();

  increase(){
    this.value += 10;
    this.valueChange.emit(this.value);
  }
}

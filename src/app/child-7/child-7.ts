import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-7',
  standalone: true,
  imports: [],
  templateUrl: './child-7.html',
  styleUrls: ['./child-7.css'],
})
export class Child7 {

  private _amount = 0;

  @Input()
  set amount (value:number){
    if(value<=0){
      this.invalidAmount.emit('Amount should be greater than 0');
    }
    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

  @Output() invalidAmount = new EventEmitter<string>();

}

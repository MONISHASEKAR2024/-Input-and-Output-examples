import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-8',
  standalone: true,
  imports: [],
  templateUrl: './child-8.html',
  styleUrls: ['./child-8.css'],
})
export class Child8 {
  private _name = '';

  @Input()
  set name(value: string) {
    if (value && value.length < 3) {
      this.updatedName.emit('Name should be at least 3 characters');
    } else {
      this.updatedName.emit('');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  @Output() updatedName = new EventEmitter<string>();
}

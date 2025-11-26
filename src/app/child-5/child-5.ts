import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Parent5 } from '../parent-5/parent-5';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-5.html',
  styleUrl: './child-5.css',
})
export class Child5 {
  @Input () item! :{name: string; id: number; price: number};
  @Output () pro = new EventEmitter <{name: string; id: number; price: number}>();

  UpdateName(newNAme : string){
    const things = { ...this.item, name: newNAme}
    this.pro.emit(things);
  }

  UpdateId(){
  const things = { ...this.item, id: this.item.id + 1};
  this.pro.emit(things);
  }

  UpdatesId(){
    const things = { ...this.item, id: this.item.id - 1};
    this.pro.emit(things);
  }
  
  UpdatePrice(newPrice : number){
    const things = { ...this.item, price: newPrice };
    this.pro.emit(things);
  }

} 

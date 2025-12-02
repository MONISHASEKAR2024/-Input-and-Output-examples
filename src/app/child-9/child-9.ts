import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-9.html',
  styleUrls: ['./child-9.css'],
})
export class Child9 {
  private _product : any;


  @Input () 
  set product (value : any){
    // this.Prod.emit(value);
    this._product = value;

    const errors = [];

    if(!value.name)errors.push('Product name is required');
    if(!value.price || value.price <=0)errors.push('Product price is greater than 0');

    if(errors.length > 0){
      this.Prod.emit(errors);
    }

  }

  get product (){
    return this._product;
  }
  

  @Output () Prod = new EventEmitter<string[]>();



}

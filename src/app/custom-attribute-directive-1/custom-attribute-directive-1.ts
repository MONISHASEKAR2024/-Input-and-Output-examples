import { Component } from '@angular/core';
import { AppHighlight } from "../app-highlight";
import { AppSelect } from '../app-select';
import { AppDisable } from '../app-disable';

@Component({
  selector: 'app-custom-attribute-directive-1',
  standalone: true,
  imports: [AppHighlight, AppSelect, AppDisable],
  templateUrl: './custom-attribute-directive-1.html',
  styleUrls: ['./custom-attribute-directive-1.css'],
})
export class CustomAttributeDirective1 {
  data: any;
  message: string = '';

  OnClick(value:any){
    this.data 

  }
}

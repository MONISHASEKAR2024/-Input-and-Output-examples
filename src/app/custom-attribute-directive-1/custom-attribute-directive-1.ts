import { Component } from '@angular/core';
import { AppHighlight } from "../Directive/app-highlight";
import { AppSelect } from '../Directive/app-select';
import { AppDisable } from '../Directive/app-disable';

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
    // Store the click event or value to avoid unused variable errors
    this.data = value;
    // Optionally update message or handle logic here
    // this.message = 'Clicked!';

  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  imports: [FormsModule],
  templateUrl: './child2.html',
  styleUrls: ['./child2.css'],
  standalone: true,
})
export class Child2 {
  message: string ='';

 @Output () data = new EventEmitter <string>();

 SendtoParent(){
  this.data.emit(this.message);
 }

}

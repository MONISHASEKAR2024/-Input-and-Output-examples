import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../Service/message-service';

@Component({
  selector: 'app-sender-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sender-component.html',
  styleUrls: ['./sender-component.css'],
})
export class SenderComponent {
  newMessage = '';
//   constructor(private messageService: MessageService){}

//   onClick(){
//   this.messageService.changeMessage(this.newMessage);
//  }


}

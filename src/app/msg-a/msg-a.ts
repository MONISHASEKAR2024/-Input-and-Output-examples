import { Component } from '@angular/core';
import { MsgService1 } from '../Service/msg-service-1';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-msg-a',
  imports: [FormsModule],
  templateUrl: './msg-a.html',
  styleUrl: './msg-a.css',
})
export class MsgA {
  newMessage = "";

  constructor(private msgService: MsgService1) {}

  sendMessage() {
    this.msgService.updateMessage(this.newMessage);
  }
}

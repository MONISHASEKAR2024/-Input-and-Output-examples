import { Component } from '@angular/core';
import { MsgService1 } from '../Service/msg-service-1';

@Component({
  selector: 'app-msg-b',
  imports: [],
  templateUrl: './msg-b.html',
  styleUrl: './msg-b.css',
})
export class MsgB {
  receivedMessage = "";

  constructor(private msgService: MsgService1) {}

  ngOnInit(): void {
    this.msgService.currentMessage$.subscribe(msg => {
      this.receivedMessage = msg;
    
    });
  }
}

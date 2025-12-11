import { Component } from '@angular/core';
import { MessageService } from '../Service/message-service';

@Component({
  selector: 'app-receiver-component',
  standalone: true,
  imports: [],
  templateUrl: './receiver-component.html',
  styleUrls: ['./receiver-component.css'],
})
export class ReceiverComponent {
  message! : string;

  // constructor(private messageService: MessageService){}

  // ngOnInit() {
  //   this.messageService.currentMessage.subscribe(msg => this.message = msg);
  // }
}

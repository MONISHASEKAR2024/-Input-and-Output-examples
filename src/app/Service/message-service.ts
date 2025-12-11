import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSource = new BehaviorSubject<string>('Initial Message');
  currentMessage = this.messageSource.asObservable();
  
  // currentMessage() {
  //   return this.MessageSource.asObservable();
  // }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

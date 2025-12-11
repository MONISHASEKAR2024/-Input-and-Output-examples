import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MsgService1 {
  private messageSource  = new BehaviorSubject<string>('Default Message');
  currentMessage$ = this.messageSource.asObservable();

  updateMessage(msg: string){
    this.messageSource.next(msg);
  }
}


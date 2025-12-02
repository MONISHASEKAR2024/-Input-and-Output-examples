import { Component } from '@angular/core';
import { Child8 } from '../child-8/child-8';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-parent-8',
  standalone: true,
  imports: [Child8, FormsModule, NgIf],
  templateUrl: './parent-8.html',
  styleUrls: ['./parent-8.css'],
})
export class Parent8 {
  username = '';
  // username = 'monisha';

  showerrormsg = '';

  OnErrorMsg(value: string){
    this.showerrormsg = value;
  }

  OnSend(){
    if (this.username && this.username.length < 3) {
      this.showerrormsg = 'Name should be at least 3 characters';
      return;
    }
    // proceed with submit logic; for now, clear the input and error
    this.showerrormsg = '';
    this.username = '';
  }
}

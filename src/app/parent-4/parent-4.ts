import { Component } from '@angular/core';
import { Child4 } from "../child-4/child-4";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-4',
  standalone: true,
  imports: [Child4, CommonModule],
  templateUrl: './parent-4.html',
  styleUrl: './parent-4.css',
})
export class Parent4 {
  selectedUser = {
     name : 'monisha',
     age : 24
  };

  saveUser(updatedUser : any){
    this.selectedUser = { ...updatedUser }
  }

}

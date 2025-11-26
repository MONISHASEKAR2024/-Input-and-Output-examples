import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-4',
  standalone: true,
  imports: [],
  templateUrl: './child-4.html',
  styleUrl: './child-4.css',
})
export class Child4 {
  newName = '';
  @Input () user! : {name: string; age: number;}

  @Output () profileUpdated = new EventEmitter <{name: string; age: number}>();

  updateAge(){
    const updatedUser = { ...this.user, age: this.user.age + 1};
    this.profileUpdated.emit(updatedUser)
  }

  updateName(newName : string){
    const updatedUser = { ...this.user, name: newName }
    this.profileUpdated.emit(updatedUser)
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-model.html',
  styleUrl: './ng-model.css',
})
export class NgModel {
  username = '';
}

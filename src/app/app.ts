import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent1 } from "./parent1/parent1";
import { FormsModule } from '@angular/forms';
import { Child2 } from "./child2/child2";
import { Parent2 } from './parent2/parent2';
import { Parent3 } from "./parent-3/parent-3";
import { Child3 } from "./child-3/child-3";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parent1, FormsModule, Child2, Parent2, Parent3, Child3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examples-of-learnings');
}

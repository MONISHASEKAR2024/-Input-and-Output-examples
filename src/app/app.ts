import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent1 } from "./parent1/parent1";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parent1, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examples-of-learnings');
}

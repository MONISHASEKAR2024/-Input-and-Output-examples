import { Component } from '@angular/core';
// import { CommonModule } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-ngif-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif-1.html',
  styleUrl: './ngif-1.css',
})
export class Ngif1 {
  isActive = false;

}

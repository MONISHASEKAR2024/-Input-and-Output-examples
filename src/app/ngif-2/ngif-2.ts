import { Component } from '@angular/core';
// import { CommonModule } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule} from '@angular/common'
@Component({
  selector: 'app-ngif-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif-2.html',
  styleUrl: './ngif-2.css',
})
export class Ngif2 {
  age = 19;
  country = 'indi';
}

import { Component } from '@angular/core';
import { CommonModule,  } from '@angular/common'

@Component({
  selector: 'app-ngif-3',
  imports: [CommonModule],
  templateUrl: './ngif-3.html',
  styleUrl: './ngif-3.css',
})
export class Ngif3 {
  isLoggedin = true;

  products=[ 
    {name: 'ink', id: 24, instock: true},
    {name: 'pen', id: 14, instock: false},
    {name: 'paper', id: 15, instock: true}
  ]
  
}

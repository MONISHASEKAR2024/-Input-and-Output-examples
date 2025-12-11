import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppSelect]',
  standalone: true,
})
export class AppSelect {
  @HostBinding('style.border') border : string = 'none';

  @HostListener('click') onClick(){
    this.border = '2px solid red';
  }
  constructor() { }

}

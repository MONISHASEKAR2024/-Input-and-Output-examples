import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppDisable]',
})
export class AppDisable {

  constructor() { }

  @HostBinding('attr.disabled') disabled = false;
  @HostListener('click')
  onClick(){
    this.disabled = true;
  }

}

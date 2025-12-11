import { Directive, ElementRef, HostListener, Input, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
  standalone: true  
})
export class AppHighlight {

  @Input('appAppHighlight') highlightColor: string = 'yellow';

  constructor( private el : ElementRef, private renderer: Renderer2) {}

    @HostListener('mouseenter') onmouseenter(){
      const color = this.highlightColor && this.highlightColor.trim() ? this.highlightColor : 'yellow';
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color, RendererStyleFlags2.Important);
    }

    @HostListener('mouseleave') onmouseleave(){
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');

    }


}

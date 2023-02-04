import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input()
  target=''

  @HostListener('click')
  onClick() {

  }

  constructor() { }

}

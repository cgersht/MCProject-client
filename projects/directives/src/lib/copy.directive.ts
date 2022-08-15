import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({selector: '[libCopy]'})

export class CopyDirective {

  private _value: string;

  @Input('copy') set copy(value: string) {
    this._value = value;
  }
  constructor(private el: ElementRef) { }

  @HostListener('click')  click() {
    const input = document.createElement('input');
    input.value = this._value || (this.el.nativeElement as HTMLElement).innerText;

    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');

    input.remove();
  }
}

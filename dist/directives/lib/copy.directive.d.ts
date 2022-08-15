import { ElementRef } from '@angular/core';
export declare class CopyDirective {
    private el;
    private _value;
    copy: string;
    constructor(el: ElementRef);
    click(): void;
}

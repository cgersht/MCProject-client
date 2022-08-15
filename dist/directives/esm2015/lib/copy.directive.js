/**
 * @fileoverview added by tsickle
 * Generated from: lib/copy.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
export class CopyDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set copy(value) {
        this._value = value;
    }
    /**
     * @return {?}
     */
    click() {
        /** @type {?} */
        const input = document.createElement('input');
        input.value = this._value || ((/** @type {?} */ (this.el.nativeElement))).innerText;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
    }
}
CopyDirective.decorators = [
    { type: Directive, args: [{ selector: '[libCopy]' },] }
];
/** @nocollapse */
CopyDirective.ctorParameters = () => [
    { type: ElementRef }
];
CopyDirective.propDecorators = {
    copy: [{ type: Input, args: ['copy',] }],
    click: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CopyDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    CopyDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kaXJlY3RpdmVzLyIsInNvdXJjZXMiOlsibGliL2NvcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzRSxNQUFNLE9BQU8sYUFBYTs7OztJQU94QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7Ozs7O0lBSHZDLElBQW1CLElBQUksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFHdUIsS0FBSzs7Y0FDckIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFlLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFOUUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUM7Ozs7WUFGZCxVQUFVOzs7bUJBUTNCLEtBQUssU0FBQyxNQUFNO29CQUtaLFlBQVksU0FBQyxPQUFPOzs7Ozs7O0lBUHJCLCtCQUF1Qjs7Ozs7SUFLWCwyQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbGliQ29weV0nfSlcblxuZXhwb3J0IGNsYXNzIENvcHlEaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmc7XG5cbiAgQElucHV0KCdjb3B5Jykgc2V0IGNvcHkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSAgY2xpY2soKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnZhbHVlID0gdGhpcy5fdmFsdWUgfHwgKHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblxuICAgIGlucHV0LnJlbW92ZSgpO1xuICB9XG59XG4iXX0=
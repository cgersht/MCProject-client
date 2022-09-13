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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kaXJlY3RpdmVzLyIsInNvdXJjZXMiOlsibGliL2NvcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzRSxNQUFNLE9BQU8sYUFBYTs7OztJQU94QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7Ozs7O0lBSHZDLElBQW1CLElBQUksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFHdUIsS0FBSzs7Y0FDckIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFlLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFOUUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUM7Ozs7WUFGZCxVQUFVOzs7bUJBUTNCLEtBQUssU0FBQyxNQUFNO29CQUtaLFlBQVksU0FBQyxPQUFPOzs7Ozs7O0lBUHJCLCtCQUF1Qjs7Ozs7SUFLWCwyQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2xpYkNvcHldJ30pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29weURpcmVjdGl2ZSB7XHJcblxyXG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnY29weScpIHNldCBjb3B5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpICBjbGljaygpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnZhbHVlID0gdGhpcy5fdmFsdWUgfHwgKHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0O1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgaW5wdXQuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG5cclxuICAgIGlucHV0LnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
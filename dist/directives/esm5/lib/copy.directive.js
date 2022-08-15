/**
 * @fileoverview added by tsickle
 * Generated from: lib/copy.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
var CopyDirective = /** @class */ (function () {
    function CopyDirective(el) {
        this.el = el;
    }
    Object.defineProperty(CopyDirective.prototype, "copy", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CopyDirective.prototype.click = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var input = document.createElement('input');
        input.value = this._value || ((/** @type {?} */ (this.el.nativeElement))).innerText;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
    };
    CopyDirective.decorators = [
        { type: Directive, args: [{ selector: '[libCopy]' },] }
    ];
    /** @nocollapse */
    CopyDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    CopyDirective.propDecorators = {
        copy: [{ type: Input, args: ['copy',] }],
        click: [{ type: HostListener, args: ['click',] }]
    };
    return CopyDirective;
}());
export { CopyDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kaXJlY3RpdmVzLyIsInNvdXJjZXMiOlsibGliL2NvcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRTtJQVNFLHVCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7SUFIdkMsc0JBQW1CLCtCQUFJOzs7OztRQUF2QixVQUF3QixLQUFhO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBR3VCLDZCQUFLOzs7SUFBN0I7O1lBQ1EsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFlLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFOUUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUM7Ozs7Z0JBRmQsVUFBVTs7O3VCQVEzQixLQUFLLFNBQUMsTUFBTTt3QkFLWixZQUFZLFNBQUMsT0FBTzs7SUFVdkIsb0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQW5CWSxhQUFhOzs7Ozs7SUFFeEIsK0JBQXVCOzs7OztJQUtYLDJCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tsaWJDb3B5XSd9KVxuXG5leHBvcnQgY2xhc3MgQ29weURpcmVjdGl2ZSB7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZztcblxuICBASW5wdXQoJ2NvcHknKSBzZXQgY29weSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpICBjbGljaygpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudmFsdWUgPSB0aGlzLl92YWx1ZSB8fCAodGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQ7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXG4gICAgaW5wdXQucmVtb3ZlKCk7XG4gIH1cbn1cbiJdfQ==
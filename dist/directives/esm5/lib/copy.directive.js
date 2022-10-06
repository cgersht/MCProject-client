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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kaXJlY3RpdmVzLyIsInNvdXJjZXMiOlsibGliL2NvcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRTtJQVNFLHVCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7SUFIdkMsc0JBQW1CLCtCQUFJOzs7OztRQUF2QixVQUF3QixLQUFhO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBR3VCLDZCQUFLOzs7SUFBN0I7O1lBQ1EsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFlLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFOUUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUM7Ozs7Z0JBRmQsVUFBVTs7O3VCQVEzQixLQUFLLFNBQUMsTUFBTTt3QkFLWixZQUFZLFNBQUMsT0FBTzs7SUFVdkIsb0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQW5CWSxhQUFhOzs7Ozs7SUFFeEIsK0JBQXVCOzs7OztJQUtYLDJCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbGliQ29weV0nfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3B5RGlyZWN0aXZlIHtcclxuXHJcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCdjb3B5Jykgc2V0IGNvcHkodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgIGNsaWNrKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQudmFsdWUgPSB0aGlzLl92YWx1ZSB8fCAodGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHQ7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBpbnB1dC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcblxyXG4gICAgaW5wdXQucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
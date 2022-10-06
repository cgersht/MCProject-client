/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/has-errors.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var HasErrorsPipe = /** @class */ (function () {
    function HasErrorsPipe() {
    }
    /**
     * @param {?} formGroup
     * @param {?} controlName
     * @return {?}
     */
    HasErrorsPipe.prototype.transform = /**
     * @param {?} formGroup
     * @param {?} controlName
     * @return {?}
     */
    function (formGroup, controlName) {
        return !!Object.keys(formGroup.controls[controlName].errors).length;
    };
    HasErrorsPipe.decorators = [
        { type: Pipe, args: [{ name: 'hasErrors' },] }
    ];
    return HasErrorsPipe;
}());
export { HasErrorsPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzLWVycm9ycy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwZXMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaGFzLWVycm9ycy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFBQTtJQU9BLENBQUM7Ozs7OztJQUpDLGlDQUFTOzs7OztJQUFULFVBQVUsU0FBb0IsRUFBRSxXQUFrQjtRQUNoRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFFO0lBQ3ZFLENBQUM7O2dCQUxGLElBQUksU0FBQyxFQUFHLElBQUksRUFBRSxXQUFXLEVBQUM7O0lBTzNCLG9CQUFDO0NBQUEsQUFQRCxJQU9DO1NBTlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQFBpcGUoeyAgbmFtZTogJ2hhc0Vycm9ycyd9KVxuZXhwb3J0IGNsYXNzIEhhc0Vycm9yc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGNvbnRyb2xOYW1lOnN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5lcnJvcnMpLmxlbmd0aCA7XG4gIH1cblxufVxuIl19
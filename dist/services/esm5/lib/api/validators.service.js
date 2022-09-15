/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/validators.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ValidatorsService = /** @class */ (function () {
    function ValidatorsService() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    ValidatorsService.prototype.phoneValidator = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        console.log(control);
        if (control.value.length) {
            if (control.value.length > 7 && control.value.length < 13) {
                if (control.value.match(/^[0-9]+(\.?[0-9]+)?$/))
                    return null;
            }
            else {
                return { invalidPhone: true };
            }
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ValidatorsService.prototype.emailValidator = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            return null;
        }
        else {
            return { invalidEmailAddress: true };
        }
    };
    ValidatorsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ValidatorsService.ctorParameters = function () { return []; };
    /** @nocollapse */ ValidatorsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidatorsService_Factory() { return new ValidatorsService(); }, token: ValidatorsService, providedIn: "root" });
    return ValidatorsService;
}());
export { ValidatorsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL3ZhbGlkYXRvcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBS0U7SUFBZ0IsQ0FBQzs7Ozs7SUFFakIsMENBQWM7Ozs7SUFBZCxVQUFlLE9BQU87UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQixJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDO1lBQ3RCLElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxJQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLEVBQUUsRUFBQztnQkFDakQsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztvQkFDOUMsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFDSTtnQkFDSCxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ2pDO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUNDLDBDQUFjOzs7O0lBQWQsVUFBZSxPQUFPO1FBQ3BCLElBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQ2pCLHNFQUFzRSxDQUFDLEVBQ3pFO1lBQ0EsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Z0JBNUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzRCQUpEO0NBaUNDLEFBL0JELElBK0JDO1NBNUJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcGhvbmVWYWxpZGF0b3IoY29udHJvbCl7XG4gIGNvbnNvbGUubG9nKGNvbnRyb2wpOyAgICBcbiAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aCl7XG4gICAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aD43JiZjb250cm9sLnZhbHVlLmxlbmd0aDwxMyl7XG4gICAgICAgIGlmKGNvbnRyb2wudmFsdWUubWF0Y2goL15bMC05XSsoXFwuP1swLTldKyk/JC8pKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgaW52YWxpZFBob25lOiB0cnVlIH07XG4gICAgfVxuICB9XG59XG4gIGVtYWlsVmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZiAoXG4gICAgICBjb250cm9sLnZhbHVlLm1hdGNoKFxuICAgICAgICAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvKVxuICAgICkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IGludmFsaWRFbWFpbEFkZHJlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cblxuXG59XG4iXX0=
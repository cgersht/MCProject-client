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
    ValidatorsService.prototype.textValidators = /**
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
    ValidatorsService.prototype.phoneValidator = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        console.log(control);
        if (control.value.length) {
            if (control.value.length > 7 && control.value.length < 13) {
                if (control.value.match(/^[א-ת]+(\.?[א-ת]+)?$/))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL3ZhbGlkYXRvcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBS0U7SUFBZ0IsQ0FBQzs7Ozs7SUFDakIsMENBQWM7Ozs7SUFBZCxVQUFlLE9BQU87UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDO1lBQ3RCLElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxJQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLEVBQUUsRUFBQztnQkFDakQsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztvQkFDOUMsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFDSTtnQkFDSCxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ2pDO1NBQ0Y7SUFDRCxDQUFDOzs7OztJQUNELDBDQUFjOzs7O0lBQWQsVUFBZSxPQUFPO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUN0QixJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxFQUFFLEVBQUM7Z0JBQ2pELElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7b0JBQzlDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQ0k7Z0JBQ0gsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFDQywwQ0FBYzs7OztJQUFkLFVBQWUsT0FBTztRQUNwQixJQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNqQixzRUFBc0UsQ0FBQyxFQUN6RTtZQUNBLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7O2dCQXZDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs0QkFKRDtDQTRDQyxBQTFDRCxJQTBDQztTQXZDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvcnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICB0ZXh0VmFsaWRhdG9ycyhjb250cm9sKXtcbiAgICBjb25zb2xlLmxvZyhjb250cm9sKTtcbiAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aCl7XG4gICAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aD43JiZjb250cm9sLnZhbHVlLmxlbmd0aDwxMyl7XG4gICAgICAgIGlmKGNvbnRyb2wudmFsdWUubWF0Y2goL15bMC05XSsoXFwuP1swLTldKyk/JC8pKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgaW52YWxpZFBob25lOiB0cnVlIH07XG4gICAgfVxuICB9XG4gIH1cbiAgcGhvbmVWYWxpZGF0b3IoY29udHJvbCl7XG4gIGNvbnNvbGUubG9nKGNvbnRyb2wpOyAgICBcbiAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aCl7XG4gICAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aD43JiZjb250cm9sLnZhbHVlLmxlbmd0aDwxMyl7XG4gICAgICAgIGlmKGNvbnRyb2wudmFsdWUubWF0Y2goL15b15At16pdKyhcXC4/W9eQLdeqXSspPyQvKSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IGludmFsaWRQaG9uZTogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufVxuICBlbWFpbFZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYgKFxuICAgICAgY29udHJvbC52YWx1ZS5tYXRjaChcbiAgICAgICAgL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLylcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBpbnZhbGlkRW1haWxBZGRyZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG5cblxufVxuIl19
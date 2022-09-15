/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/validators.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ValidatorsService {
    constructor() { }
    /**
     * @param {?} control
     * @return {?}
     */
    phoneValidator(control) {
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
    }
    /**
     * @param {?} control
     * @return {?}
     */
    emailValidator(control) {
        if (control.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            return null;
        }
        else {
            return { invalidEmailAddress: true };
        }
    }
}
ValidatorsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ValidatorsService.ctorParameters = () => [];
/** @nocollapse */ ValidatorsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidatorsService_Factory() { return new ValidatorsService(); }, token: ValidatorsService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL3ZhbGlkYXRvcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsZ0JBQWdCLENBQUM7Ozs7O0lBRWpCLGNBQWMsQ0FBQyxPQUFPO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUN0QixJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxFQUFFLEVBQUM7Z0JBQ2pELElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7b0JBQzlDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQ0k7Z0JBQ0gsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFDQyxjQUFjLENBQUMsT0FBTztRQUNwQixJQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNqQixzRUFBc0UsQ0FBQyxFQUN6RTtZQUNBLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7OztZQTVCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvcnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHBob25lVmFsaWRhdG9yKGNvbnRyb2wpe1xuICBjb25zb2xlLmxvZyhjb250cm9sKTsgICAgXG4gICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGgpe1xuICAgICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGg+NyYmY29udHJvbC52YWx1ZS5sZW5ndGg8MTMpe1xuICAgICAgICBpZihjb250cm9sLnZhbHVlLm1hdGNoKC9eWzAtOV0rKFxcLj9bMC05XSspPyQvKSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IGludmFsaWRQaG9uZTogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufVxuICBlbWFpbFZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYgKFxuICAgICAgY29udHJvbC52YWx1ZS5tYXRjaChcbiAgICAgICAgL15bYS16QS1aMC05LiEjJCUm4oCZKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLylcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBpbnZhbGlkRW1haWxBZGRyZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG5cblxufVxuIl19
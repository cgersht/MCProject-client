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
    textValidators(control) {
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
    phoneValidator(control) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL3ZhbGlkYXRvcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsZ0JBQWdCLENBQUM7Ozs7O0lBQ2pCLGNBQWMsQ0FBQyxPQUFPO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUN0QixJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxFQUFFLEVBQUM7Z0JBQ2pELElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7b0JBQzlDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQ0k7Z0JBQ0gsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNqQztTQUNGO0lBQ0QsQ0FBQzs7Ozs7SUFDRCxjQUFjLENBQUMsT0FBTztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUM7WUFDdEIsSUFBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsRUFBRSxFQUFDO2dCQUNqRCxJQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO29CQUM5QyxPQUFPLElBQUksQ0FBQzthQUNiO2lCQUNJO2dCQUNILE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDakM7U0FDRjtJQUNILENBQUM7Ozs7O0lBQ0MsY0FBYyxDQUFDLE9BQU87UUFDcEIsSUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDakIsc0VBQXNFLENBQUMsRUFDekU7WUFDQSxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7WUF2Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgdGV4dFZhbGlkYXRvcnMoY29udHJvbCl7XG4gICAgY29uc29sZS5sb2coY29udHJvbCk7XG4gICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGgpe1xuICAgICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGg+NyYmY29udHJvbC52YWx1ZS5sZW5ndGg8MTMpe1xuICAgICAgICBpZihjb250cm9sLnZhbHVlLm1hdGNoKC9eWzAtOV0rKFxcLj9bMC05XSspPyQvKSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IGludmFsaWRQaG9uZTogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuICB9XG4gIHBob25lVmFsaWRhdG9yKGNvbnRyb2wpe1xuICBjb25zb2xlLmxvZyhjb250cm9sKTsgICAgXG4gICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGgpe1xuICAgICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGg+NyYmY29udHJvbC52YWx1ZS5sZW5ndGg8MTMpe1xuICAgICAgICBpZihjb250cm9sLnZhbHVlLm1hdGNoKC9eW9eQLdeqXSsoXFwuP1vXkC3Xql0rKT8kLykpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBcbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4geyBpbnZhbGlkUGhvbmU6IHRydWUgfTtcbiAgICB9XG4gIH1cbn1cbiAgZW1haWxWYWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmIChcbiAgICAgIGNvbnRyb2wudmFsdWUubWF0Y2goXG4gICAgICAgIC9eW2EtekEtWjAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8pXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgaW52YWxpZEVtYWlsQWRkcmVzczogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuXG5cbn1cbiJdfQ==
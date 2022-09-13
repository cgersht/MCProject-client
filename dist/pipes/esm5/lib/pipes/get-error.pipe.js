/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-error.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var GetErrorPipe = /** @class */ (function () {
    function GetErrorPipe() {
    }
    /**
     * @param {?} errors
     * @return {?}
     */
    GetErrorPipe.prototype.transform = /**
     * @param {?} errors
     * @return {?}
     */
    function (errors) {
        if (!errors) {
            return [];
        }
        /** @type {?} */
        var errorsToDisplay = [];
        Object.keys(errors).forEach((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            switch (error) {
                case 'required':
                    errorsToDisplay = tslib_1.__spread(errorsToDisplay, ['שדה חובה']);
                    break;
                case 'invalidEmailAddress':
                    errorsToDisplay = tslib_1.__spread(errorsToDisplay, ['כתובת אמייל לא נכונה']);
                    break;
                case 'maxlength':
                    errorsToDisplay = tslib_1.__spread(errorsToDisplay, ['מספר תווים לא תקין']);
                    break;
            }
        }));
        return errorsToDisplay;
    };
    GetErrorPipe.decorators = [
        { type: Pipe, args: [{ name: 'getError' },] }
    ];
    return GetErrorPipe;
}());
export { GetErrorPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVycm9yLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9nZXQtZXJyb3IucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRDtJQUFBO0lBc0JBLENBQUM7Ozs7O0lBbkJDLGdDQUFTOzs7O0lBQVQsVUFBVSxNQUF3QjtRQUNoQyxJQUFHLENBQUMsTUFBTSxFQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUM7U0FDWDs7WUFDRyxlQUFlLEdBQUcsRUFBRTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDL0IsUUFBTyxLQUFLLEVBQUM7Z0JBQ1gsS0FBSSxVQUFVO29CQUFFLGVBQWUsb0JBQU0sZUFBZSxHQUFFLFVBQVUsRUFBQyxDQUFBO29CQUM1RCxNQUFNO2dCQUNYLEtBQUkscUJBQXFCO29CQUFFLGVBQWUsb0JBQU0sZUFBZSxHQUFFLHNCQUFzQixFQUFDLENBQUE7b0JBQ25GLE1BQU07Z0JBQ1gsS0FBSSxXQUFXO29CQUFFLGVBQWUsb0JBQU0sZUFBZSxHQUFFLG9CQUFvQixFQUFDLENBQUE7b0JBQ3ZFLE1BQU07YUFDWjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxlQUFlLENBQUU7SUFDMUIsQ0FBQzs7Z0JBbkJGLElBQUksU0FBQyxFQUFHLElBQUksRUFBRSxVQUFVLEVBQUM7O0lBc0IxQixtQkFBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AUGlwZSh7ICBuYW1lOiAnZ2V0RXJyb3InfSlcbmV4cG9ydCBjbGFzcyBHZXRFcnJvclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzKTogIHN0cmluZ1tdIHtcbiAgICBpZighZXJyb3JzKXtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgbGV0IGVycm9yc1RvRGlzcGxheSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGVycm9ycykuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICBzd2l0Y2goZXJyb3Ipe1xuICAgICAgICBjYXNlJ3JlcXVpcmVkJzogZXJyb3JzVG9EaXNwbGF5PSBbLi4uZXJyb3JzVG9EaXNwbGF5LCAn16nXk9eUINeX15XXkdeUJ11cbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSdpbnZhbGlkRW1haWxBZGRyZXNzJzogZXJyb3JzVG9EaXNwbGF5PSBbLi4uZXJyb3JzVG9EaXNwbGF5LCAn15vXqteV15HXqiDXkNee15nXmdecINec15Ag16DXm9eV16DXlCddXG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UnbWF4bGVuZ3RoJzogZXJyb3JzVG9EaXNwbGF5PSBbLi4uZXJyb3JzVG9EaXNwbGF5LCAn157Xodek16gg16rXldeV15nXnSDXnNeQINeq16fXmdefJ11cbiAgICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTsgXG4gICAgcmV0dXJuIGVycm9yc1RvRGlzcGxheSA7XG4gIH1cblxuXG59XG4iXX0=
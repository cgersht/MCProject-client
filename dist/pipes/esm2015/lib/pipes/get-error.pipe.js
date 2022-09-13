/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-error.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class GetErrorPipe {
    /**
     * @param {?} errors
     * @return {?}
     */
    transform(errors) {
        if (!errors) {
            return [];
        }
        /** @type {?} */
        let errorsToDisplay = [];
        Object.keys(errors).forEach((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            switch (error) {
                case 'required':
                    errorsToDisplay = [...errorsToDisplay, 'שדה חובה'];
                    break;
                case 'invalidEmailAddress':
                    errorsToDisplay = [...errorsToDisplay, 'כתובת אמייל לא נכונה'];
                    break;
                case 'maxlength':
                    errorsToDisplay = [...errorsToDisplay, 'מספר תווים לא תקין'];
                    break;
            }
        }));
        return errorsToDisplay;
    }
}
GetErrorPipe.decorators = [
    { type: Pipe, args: [{ name: 'getError' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVycm9yLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9nZXQtZXJyb3IucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSXBELE1BQU0sT0FBTyxZQUFZOzs7OztJQUV2QixTQUFTLENBQUMsTUFBd0I7UUFDaEMsSUFBRyxDQUFDLE1BQU0sRUFBQztZQUNULE9BQU8sRUFBRSxDQUFDO1NBQ1g7O1lBQ0csZUFBZSxHQUFHLEVBQUU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsUUFBTyxLQUFLLEVBQUM7Z0JBQ1gsS0FBSSxVQUFVO29CQUFFLGVBQWUsR0FBRSxDQUFDLEdBQUcsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFBO29CQUM1RCxNQUFNO2dCQUNYLEtBQUkscUJBQXFCO29CQUFFLGVBQWUsR0FBRSxDQUFDLEdBQUcsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUE7b0JBQ25GLE1BQU07Z0JBQ1gsS0FBSSxXQUFXO29CQUFFLGVBQWUsR0FBRSxDQUFDLEdBQUcsZUFBZSxFQUFFLG9CQUFvQixDQUFDLENBQUE7b0JBQ3ZFLE1BQU07YUFDWjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxlQUFlLENBQUU7SUFDMUIsQ0FBQzs7O1lBbkJGLElBQUksU0FBQyxFQUFHLElBQUksRUFBRSxVQUFVLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AUGlwZSh7ICBuYW1lOiAnZ2V0RXJyb3InfSlcbmV4cG9ydCBjbGFzcyBHZXRFcnJvclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzKTogIHN0cmluZ1tdIHtcbiAgICBpZighZXJyb3JzKXtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgbGV0IGVycm9yc1RvRGlzcGxheSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGVycm9ycykuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICBzd2l0Y2goZXJyb3Ipe1xuICAgICAgICBjYXNlJ3JlcXVpcmVkJzogZXJyb3JzVG9EaXNwbGF5PSBbLi4uZXJyb3JzVG9EaXNwbGF5LCAn16nXk9eUINeX15XXkdeUJ11cbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSdpbnZhbGlkRW1haWxBZGRyZXNzJzogZXJyb3JzVG9EaXNwbGF5PSBbLi4uZXJyb3JzVG9EaXNwbGF5LCAn15vXqteV15HXqiDXkNee15nXmdecINec15Ag16DXm9eV16DXlCddXG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UnbWF4bGVuZ3RoJzogZXJyb3JzVG9EaXNwbGF5PSBbLi4uZXJyb3JzVG9EaXNwbGF5LCAn157Xodek16gg16rXldeV15nXnSDXnNeQINeq16fXmdefJ11cbiAgICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTsgXG4gICAgcmV0dXJuIGVycm9yc1RvRGlzcGxheSA7XG4gIH1cblxuXG59XG4iXX0=
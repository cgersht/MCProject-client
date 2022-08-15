/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-img-path.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { GetOptionsService } from 'services';
export class GetImgPathPipe {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * @param {?} img
     * @return {?}
     */
    transform(img) {
        // console.log(img+"      img");    
        return this.service.getOptionByImage(img);
    }
}
GetImgPathPipe.decorators = [
    { type: Pipe, args: [{ name: 'getImgPath' },] }
];
/** @nocollapse */
GetImgPathPipe.ctorParameters = () => [
    { type: GetOptionsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetImgPathPipe.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWltZy1wYXRoLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9nZXQtaW1nLXBhdGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUk5QyxNQUFNLE9BQU8sY0FBYzs7OztJQUN6QixZQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUFJLENBQUM7Ozs7O0lBQ25ELFNBQVMsQ0FBQyxHQUFXO1FBQ25CLG9DQUFvQztRQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBTkYsSUFBSSxTQUFDLEVBQUcsSUFBSSxFQUFFLFlBQVksRUFBQzs7OztZQUhsQixpQkFBaUI7Ozs7Ozs7SUFLYixpQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbiBcclxuIGltcG9ydCB7IEdldE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMnOyBcclxuXHJcblxyXG5AUGlwZSh7ICBuYW1lOiAnZ2V0SW1nUGF0aCd9KVxyXG5leHBvcnQgY2xhc3MgR2V0SW1nUGF0aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEdldE9wdGlvbnNTZXJ2aWNlKSB7IH1cclxuICB0cmFuc2Zvcm0oaW1nOiBzdHJpbmcpOiBzdHJpbmcgIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGltZytcIiAgICAgIGltZ1wiKTsgICAgXHJcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldE9wdGlvbkJ5SW1hZ2UoaW1nKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
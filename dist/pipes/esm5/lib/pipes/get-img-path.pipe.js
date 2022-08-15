/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/get-img-path.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { GetOptionsService } from 'services';
var GetImgPathPipe = /** @class */ (function () {
    function GetImgPathPipe(service) {
        this.service = service;
    }
    /**
     * @param {?} img
     * @return {?}
     */
    GetImgPathPipe.prototype.transform = /**
     * @param {?} img
     * @return {?}
     */
    function (img) {
        // console.log(img+"      img");    
        return this.service.getOptionByImage(img);
    };
    GetImgPathPipe.decorators = [
        { type: Pipe, args: [{ name: 'getImgPath' },] }
    ];
    /** @nocollapse */
    GetImgPathPipe.ctorParameters = function () { return [
        { type: GetOptionsService }
    ]; };
    return GetImgPathPipe;
}());
export { GetImgPathPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GetImgPathPipe.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWltZy1wYXRoLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9nZXQtaW1nLXBhdGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUc5QztJQUVFLHdCQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUFJLENBQUM7Ozs7O0lBQ25ELGtDQUFTOzs7O0lBQVQsVUFBVSxHQUFXO1FBQ25CLG9DQUFvQztRQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBTkYsSUFBSSxTQUFDLEVBQUcsSUFBSSxFQUFFLFlBQVksRUFBQzs7OztnQkFIbEIsaUJBQWlCOztJQVczQixxQkFBQztDQUFBLEFBUkQsSUFRQztTQVBZLGNBQWM7Ozs7OztJQUNiLGlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuIFxyXG4gaW1wb3J0IHsgR2V0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcyc7IFxyXG5cclxuXHJcbkBQaXBlKHsgIG5hbWU6ICdnZXRJbWdQYXRoJ30pXHJcbmV4cG9ydCBjbGFzcyBHZXRJbWdQYXRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogR2V0T3B0aW9uc1NlcnZpY2UpIHsgfVxyXG4gIHRyYW5zZm9ybShpbWc6IHN0cmluZyk6IHN0cmluZyAge1xyXG4gICAgLy8gY29uc29sZS5sb2coaW1nK1wiICAgICAgaW1nXCIpOyAgICBcclxuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0T3B0aW9uQnlJbWFnZShpbWcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
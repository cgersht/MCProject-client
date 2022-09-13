/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-options.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var GetOptionsService = /** @class */ (function () {
    function GetOptionsService(http) {
        this.http = http;
    }
    //
    //
    /**
     * @param {?} path
     * @param {?} imagesPath
     * @return {?}
     */
    GetOptionsService.prototype.initService = 
    //
    /**
     * @param {?} path
     * @param {?} imagesPath
     * @return {?}
     */
    function (path, imagesPath) {
        var _this = this;
        console.log("============" + path);
        return this.http.get(path).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (tslib_1.__assign({}, item, { imgSource: imagesPath + "/" + item['img'] + ".png" })); })); })), tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.options = result; })), tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return console.log("**************" + { result: result }); }))).toPromise();
    };
    /**
     * @return {?}
     */
    GetOptionsService.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.options;
    };
    /**
     * @param {?} img
     * @return {?}
     */
    GetOptionsService.prototype.getOptionByImage = /**
     * @param {?} img
     * @return {?}
     */
    function (img) {
        if (!this.options) {
            return '';
        }
        return (this.options.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.img === img; })) || { imgSource: 'notFound' }).imgSource;
    };
    GetOptionsService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    GetOptionsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ GetOptionsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetOptionsService_Factory() { return new GetOptionsService(i0.ɵɵinject(i1.HttpClient)); }, token: GetOptionsService, providedIn: "root" });
    return GetOptionsService;
}());
export { GetOptionsService };
if (false) {
    /** @type {?} */
    GetOptionsService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GetOptionsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW9wdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtb3B0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUUxQztJQUdFLDJCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUssQ0FBQztJQUM1QyxFQUFFOzs7Ozs7O0lBQ0EsdUNBQVc7Ozs7Ozs7SUFBWCxVQUFZLElBQVksRUFBQyxVQUFrQjtRQUEzQyxpQkFPQztRQU5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWUsSUFBTSxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3JDLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxzQkFBTSxJQUFJLElBQUUsU0FBUyxFQUFLLFVBQVUsU0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQU0sSUFBRSxFQUE1RCxDQUE0RCxFQUFDLEVBQWhGLENBQWdGLEVBQUMsRUFDL0YsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQXJCLENBQXFCLEVBQUMsRUFDcEMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsRUFBQyxNQUFNLFFBQUEsRUFBRyxDQUFDLEVBQXhDLENBQXdDLEVBQUMsQ0FDdkQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBQ0Qsc0NBQVU7OztJQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLEdBQUc7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFBRyxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFoQixDQUFnQixFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUYsQ0FBQzs7Z0JBcEJGLFVBQVUsU0FBQyxFQUFHLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7Z0JBTHpCLFVBQVU7Ozs0QkFEbkI7Q0E2QkMsQUF2QkQsSUF1QkM7U0F0QlksaUJBQWlCOzs7SUFDN0Isb0NBQWlCOzs7OztJQUNKLGlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgIHByb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBHZXRPcHRpb25zU2VydmljZSB7XHJcbiBvcHRpb25zOiAgYW55W10gO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyAgfVxyXG4vL1xyXG4gIGluaXRTZXJ2aWNlKHBhdGg6IHN0cmluZyxpbWFnZXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc29sZS5sb2coYD09PT09PT09PT09PSR7cGF0aH1gKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueVtdID4ocGF0aCkucGlwZShcclxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQubWFwKGl0ZW0gPT4gKHsgLi4uaXRlbSwgaW1nU291cmNlOiBgJHtpbWFnZXNQYXRofS8keyBpdGVtWydpbWcnXX0ucG5nYH0pKSksXHJcbiAgICAgIHRhcChyZXN1bHQgPT4gdGhpcy5vcHRpb25zID0gcmVzdWx0KSxcclxuICAgICAgdGFwKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhgKioqKioqKioqKioqKioke3tyZXN1bHR9fWApKSxcclxuICAgICApLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuICBnZXRPcHRpb25zKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9uQnlJbWFnZShpbWcpIHtcclxuICAgIGlmICghdGhpcy5vcHRpb25zKSB7ICByZXR1cm4gJyc7IH1cclxuICAgIHJldHVybiAodGhpcy5vcHRpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmltZyA9PT0gaW1nKSB8fCB7aW1nU291cmNlOiAnbm90Rm91bmQnfSkuaW1nU291cmNlO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
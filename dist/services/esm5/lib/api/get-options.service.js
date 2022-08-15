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
        function (result) { return console.log("**************" + result); }))).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW9wdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtb3B0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUUxQztJQUdFLDJCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUssQ0FBQztJQUM1QyxFQUFFOzs7Ozs7O0lBQ0EsdUNBQVc7Ozs7Ozs7SUFBWCxVQUFZLElBQVksRUFBQyxVQUFrQjtRQUEzQyxpQkFPQztRQU5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWUsSUFBTSxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3JDLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxzQkFBTSxJQUFJLElBQUUsU0FBUyxFQUFLLFVBQVUsU0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQU0sSUFBRSxFQUE1RCxDQUE0RCxFQUFDLEVBQWhGLENBQWdGLEVBQUMsRUFDL0YsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQXJCLENBQXFCLEVBQUMsRUFDcEMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsTUFBUSxDQUFDLEVBQXRDLENBQXNDLEVBQUMsQ0FDckQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBQ0Qsc0NBQVU7OztJQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLEdBQUc7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFBRyxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFoQixDQUFnQixFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUYsQ0FBQzs7Z0JBcEJGLFVBQVUsU0FBQyxFQUFHLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7Z0JBTHpCLFVBQVU7Ozs0QkFEbkI7Q0E2QkMsQUF2QkQsSUF1QkM7U0F0QlksaUJBQWlCOzs7SUFDN0Isb0NBQWlCOzs7OztJQUNKLGlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHsgIHByb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgR2V0T3B0aW9uc1NlcnZpY2Uge1xuIG9wdGlvbnM6ICBhbnlbXSA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyAgfVxuLy9cbiAgaW5pdFNlcnZpY2UocGF0aDogc3RyaW5nLGltYWdlc1BhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc29sZS5sb2coYD09PT09PT09PT09PSR7cGF0aH1gKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXSA+KHBhdGgpLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5tYXAoaXRlbSA9PiAoeyAuLi5pdGVtLCBpbWdTb3VyY2U6IGAke2ltYWdlc1BhdGh9LyR7IGl0ZW1bJ2ltZyddfS5wbmdgfSkpKSxcbiAgICAgIHRhcChyZXN1bHQgPT4gdGhpcy5vcHRpb25zID0gcmVzdWx0KSxcbiAgICAgIHRhcChyZXN1bHQgPT4gY29uc29sZS5sb2coYCoqKioqKioqKioqKioqJHtyZXN1bHR9YCkpLFxuICAgICApLnRvUHJvbWlzZSgpO1xuICB9XG4gIGdldE9wdGlvbnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICB9XG5cbiAgZ2V0T3B0aW9uQnlJbWFnZShpbWcpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucykgeyAgcmV0dXJuICcnOyB9XG4gICAgcmV0dXJuICh0aGlzLm9wdGlvbnMuZmluZChpdGVtID0+IGl0ZW0uaW1nID09PSBpbWcpIHx8IHtpbWdTb3VyY2U6ICdub3RGb3VuZCd9KS5pbWdTb3VyY2U7XG4gIH1cblxuXG59XG4iXX0=
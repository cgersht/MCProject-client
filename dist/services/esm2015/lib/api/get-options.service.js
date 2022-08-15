/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-options.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class GetOptionsService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    //
    /**
     * @param {?} path
     * @param {?} imagesPath
     * @return {?}
     */
    initService(path, imagesPath) {
        console.log(`============${path}`);
        return this.http.get(path).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.map((/**
         * @param {?} item
         * @return {?}
         */
        item => (Object.assign({}, item, { imgSource: `${imagesPath}/${item['img']}.png` })))))), tap((/**
         * @param {?} result
         * @return {?}
         */
        result => this.options = result)), tap((/**
         * @param {?} result
         * @return {?}
         */
        result => console.log(`**************${result}`)))).toPromise();
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.options;
    }
    /**
     * @param {?} img
     * @return {?}
     */
    getOptionByImage(img) {
        if (!this.options) {
            return '';
        }
        return (this.options.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.img === img)) || { imgSource: 'notFound' }).imgSource;
    }
}
GetOptionsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
GetOptionsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ GetOptionsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetOptionsService_Factory() { return new GetOptionsService(i0.ɵɵinject(i1.HttpClient)); }, token: GetOptionsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GetOptionsService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GetOptionsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW9wdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtb3B0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRzFDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFLLENBQUM7Ozs7Ozs7SUFFMUMsV0FBVyxDQUFDLElBQVksRUFBQyxVQUFrQjtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDckMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFNLElBQUksSUFBRSxTQUFTLEVBQUUsR0FBRyxVQUFVLElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUUsRUFBQyxFQUFDLEVBQy9GLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFDLEVBQ3BDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FDckQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBQ0QsVUFBVTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEdBQUc7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFBRyxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUYsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQyxFQUFHLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7WUFMekIsVUFBVTs7Ozs7SUFPbEIsb0NBQWlCOzs7OztJQUNKLGlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHsgIHByb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgR2V0T3B0aW9uc1NlcnZpY2Uge1xuIG9wdGlvbnM6ICBhbnlbXSA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyAgfVxuLy9cbiAgaW5pdFNlcnZpY2UocGF0aDogc3RyaW5nLGltYWdlc1BhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc29sZS5sb2coYD09PT09PT09PT09PSR7cGF0aH1gKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXSA+KHBhdGgpLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5tYXAoaXRlbSA9PiAoeyAuLi5pdGVtLCBpbWdTb3VyY2U6IGAke2ltYWdlc1BhdGh9LyR7IGl0ZW1bJ2ltZyddfS5wbmdgfSkpKSxcbiAgICAgIHRhcChyZXN1bHQgPT4gdGhpcy5vcHRpb25zID0gcmVzdWx0KSxcbiAgICAgIHRhcChyZXN1bHQgPT4gY29uc29sZS5sb2coYCoqKioqKioqKioqKioqJHtyZXN1bHR9YCkpLFxuICAgICApLnRvUHJvbWlzZSgpO1xuICB9XG4gIGdldE9wdGlvbnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICB9XG5cbiAgZ2V0T3B0aW9uQnlJbWFnZShpbWcpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucykgeyAgcmV0dXJuICcnOyB9XG4gICAgcmV0dXJuICh0aGlzLm9wdGlvbnMuZmluZChpdGVtID0+IGl0ZW0uaW1nID09PSBpbWcpIHx8IHtpbWdTb3VyY2U6ICdub3RGb3VuZCd9KS5pbWdTb3VyY2U7XG4gIH1cblxuXG59XG4iXX0=
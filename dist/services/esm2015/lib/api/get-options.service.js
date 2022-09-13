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
        result => console.log(`**************${{ result }}`)))).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW9wdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtb3B0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRzFDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFLLENBQUM7Ozs7Ozs7SUFFMUMsV0FBVyxDQUFDLElBQVksRUFBQyxVQUFrQjtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDckMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFNLElBQUksSUFBRSxTQUFTLEVBQUUsR0FBRyxVQUFVLElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUUsRUFBQyxFQUFDLEVBQy9GLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFDLEVBQ3BDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUMsTUFBTSxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQ3ZELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUNELFVBQVU7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFHO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUcsT0FBTyxFQUFFLENBQUM7U0FBRTtRQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVGLENBQUM7OztZQXBCRixVQUFVLFNBQUMsRUFBRyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBTHpCLFVBQVU7Ozs7O0lBT2xCLG9DQUFpQjs7Ozs7SUFDSixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7ICBwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgR2V0T3B0aW9uc1NlcnZpY2Uge1xyXG4gb3B0aW9uczogIGFueVtdIDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgIH1cclxuLy9cclxuICBpbml0U2VydmljZShwYXRoOiBzdHJpbmcsaW1hZ2VzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnNvbGUubG9nKGA9PT09PT09PT09PT0ke3BhdGh9YCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXSA+KHBhdGgpLnBpcGUoXHJcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hcChpdGVtID0+ICh7IC4uLml0ZW0sIGltZ1NvdXJjZTogYCR7aW1hZ2VzUGF0aH0vJHsgaXRlbVsnaW1nJ119LnBuZ2B9KSkpLFxyXG4gICAgICB0YXAocmVzdWx0ID0+IHRoaXMub3B0aW9ucyA9IHJlc3VsdCksXHJcbiAgICAgIHRhcChyZXN1bHQgPT4gY29uc29sZS5sb2coYCoqKioqKioqKioqKioqJHt7cmVzdWx0fX1gKSksXHJcbiAgICAgKS50b1Byb21pc2UoKTtcclxuICB9XHJcbiAgZ2V0T3B0aW9ucygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcclxuICB9XHJcblxyXG4gIGdldE9wdGlvbkJ5SW1hZ2UoaW1nKSB7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucykgeyAgcmV0dXJuICcnOyB9XHJcbiAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pbWcgPT09IGltZykgfHwge2ltZ1NvdXJjZTogJ25vdEZvdW5kJ30pLmltZ1NvdXJjZTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=
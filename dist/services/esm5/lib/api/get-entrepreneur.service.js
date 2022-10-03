/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-entrepreneur.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var GetEntrepreneurService = /** @class */ (function (_super) {
    tslib_1.__extends(GetEntrepreneurService, _super);
    function GetEntrepreneurService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.entrepreneurs = [];
        return _this;
    }
    Object.defineProperty(GetEntrepreneurService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "entrepreneur/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GetEntrepreneurService.prototype.getEntrepreneurList$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getEntrepreneur',
        }));
        // return this.http.get<Entrepreneur[]>('http://localhost:3030/entrepreneur/getEntrepreneur');
    };
    /**
     * @param {?} entrepreneur
     * @return {?}
     */
    GetEntrepreneurService.prototype.addEntrepreneur$ = /**
     * @param {?} entrepreneur
     * @return {?}
     */
    function (entrepreneur) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addEntrepreneur',
            body: entrepreneur
        }));
    };
    GetEntrepreneurService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ GetEntrepreneurService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetEntrepreneurService_Factory() { return new GetEntrepreneurService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetEntrepreneurService, providedIn: "root" });
    return GetEntrepreneurService;
}(HttpServiceBase));
export { GetEntrepreneurService };
if (false) {
    /** @type {?} */
    GetEntrepreneurService.prototype.entrepreneur$;
    /** @type {?} */
    GetEntrepreneurService.prototype.entrepreneurs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVudHJlcHJlbmV1ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL2dldC1lbnRyZXByZW5ldXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXREO0lBRzRDLGtEQUFlO0lBSDNEO1FBQUEscUVBMkJDO1FBbEJDLG1CQUFhLEdBQWdCLEVBQUUsQ0FBQzs7S0FrQmpDO0lBdEJDLHNCQUFZLDhDQUFVOzs7OztRQUF0QjtZQUNFLE9BQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxrQkFBZSxDQUFDO1FBQ3ZELENBQUM7OztPQUFBOzs7O0lBS0QscURBQW9COzs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGlCQUFpQjtTQUMxQixDQUFDLENBQUMsQ0FBQztRQUNKLDhGQUE4RjtJQUVoRyxDQUFDOzs7OztJQUNELGlEQUFnQjs7OztJQUFoQixVQUFpQixZQUF5QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixJQUFJLEVBQUUsWUFBWTtTQUNyQixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7O2dCQTFCQSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7aUNBTGxDO0NBZ0NDLEFBM0JELENBRzRDLGVBQWUsR0F3QjFEO1NBeEJZLHNCQUFzQjs7O0lBS2pDLCtDQUF5Qzs7SUFDekMsK0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEVudHJlcHJlbmV1ciwgSHR0cFJlcXVlc3RNb2RlbCB9IGZyb20gJ3R5cGVzJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9odHRwLXNlcnZpY2UuYmFzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRFbnRyZXByZW5ldXJTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmlwcy5zZXJ2aWNlUGF0aH1lbnRyZXByZW5ldXIvYDtcclxuICB9XHJcbiAgZW50cmVwcmVuZXVyJDpPYnNlcnZhYmxlPEVudHJlcHJlbmV1cltdPjtcclxuICBlbnRyZXByZW5ldXJzOkVudHJlcHJlbmV1cltdPVtdO1xyXG5cclxuXHJcbiAgZ2V0RW50cmVwcmVuZXVyTGlzdCQoKTogT2JzZXJ2YWJsZTxFbnRyZXByZW5ldXJbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRFbnRyZXByZW5ldXInLFxyXG4gICAgfSkpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50cmVwcmVuZXVyW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMzAvZW50cmVwcmVuZXVyL2dldEVudHJlcHJlbmV1cicpO1xyXG5cclxuICB9XHJcbiAgYWRkRW50cmVwcmVuZXVyJChlbnRyZXByZW5ldXI6RW50cmVwcmVuZXVyKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gICAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnYWRkRW50cmVwcmVuZXVyJyxcclxuICAgICAgYm9keTogZW50cmVwcmVuZXVyXHJcbiAgfSkpO1xyXG59XHJcbn1cclxuXHJcbi8vIl19
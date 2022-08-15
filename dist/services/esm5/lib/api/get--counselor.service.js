/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get--counselor.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var GetCounselorService = /** @class */ (function (_super) {
    tslib_1.__extends(GetCounselorService, _super);
    function GetCounselorService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetCounselorService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "counselor/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} counselorType
     * @return {?}
     */
    GetCounselorService.prototype.getCounselorList$ = /**
     * @param {?} counselorType
     * @return {?}
     */
    function (counselorType) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselor',
            params: { counselorType: counselorType }
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    };
    GetCounselorService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ GetCounselorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetCounselorService_Factory() { return new GetCounselorService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetCounselorService, providedIn: "root" });
    return GetCounselorService;
}(HttpServiceBase));
export { GetCounselorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LS1jb3Vuc2Vsb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtLWNvdW5zZWxvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFZLGdCQUFnQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUV0RDtJQUd5QywrQ0FBZTtJQUh4RDs7S0FvQkM7SUFmQyxzQkFBWSwyQ0FBVTs7Ozs7UUFBdEI7WUFDRSxPQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsZUFBWSxDQUFDO1FBQ3BELENBQUM7OztPQUFBOzs7OztJQUlELCtDQUFpQjs7OztJQUFqQixVQUFrQixhQUFvQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsTUFBTSxFQUFDLEVBQUMsYUFBYSxlQUFBLEVBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxvRkFBb0Y7SUFFckYsQ0FBQzs7Z0JBbkJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs4QkFMbEM7Q0F5QkMsQUFwQkQsQ0FHeUMsZUFBZSxHQWlCdkQ7U0FqQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3Vuc2Vsb3IsIEh0dHBSZXF1ZXN0TW9kZWwgfSBmcm9tICd0eXBlcyc7XG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcblxuXG5leHBvcnQgY2xhc3MgR2V0Q291bnNlbG9yU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XG5cbiAgcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9Y291bnNlbG9yL2A7XG4gIH1cblxuXG5cbiAgZ2V0Q291bnNlbG9yTGlzdCQoY291bnNlbG9yVHlwZTpzdHJpbmcpOiBPYnNlcnZhYmxlPEN1bnNlbG9yW10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZ2V0Q291bnNlbG9yJyxcbiAgICAgIHBhcmFtczp7Y291bnNlbG9yVHlwZX1cbiAgICB9KSk7XG4gICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxDdW5zZWxvcltdPignaHR0cDovL2xvY2FsaG9zdDozMDMwL2NvdW5zZWxvci9nZXRDb3Vuc2Vsb3InKTtcblxuICB9XG59XG4iXX0=
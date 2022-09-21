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
     * @return {?}
     */
    GetCounselorService.prototype.getCounselorOfficeTypeList$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselorOfficeType',
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    };
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
    /**
     * @param {?} counselorType
     * @return {?}
     */
    GetCounselorService.prototype.addCounselorType$ = /**
     * @param {?} counselorType
     * @return {?}
     */
    function (counselorType) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addCounselorType',
            body: counselorType
        }));
    };
    /**
     * @param {?} counselor
     * @return {?}
     */
    GetCounselorService.prototype.addCounselor$ = /**
     * @param {?} counselor
     * @return {?}
     */
    function (counselor) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addCounselor',
            body: counselor
        }));
    };
    GetCounselorService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ GetCounselorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetCounselorService_Factory() { return new GetCounselorService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetCounselorService, providedIn: "root" });
    return GetCounselorService;
}(HttpServiceBase));
export { GetCounselorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LS1jb3Vuc2Vsb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtLWNvdW5zZWxvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFZLGdCQUFnQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUV0RDtJQUV5QywrQ0FBZTtJQUZ4RDs7S0F3Q0M7SUFwQ0Msc0JBQVksMkNBQVU7Ozs7O1FBQXRCO1lBQ0UsT0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLGVBQVksQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTs7OztJQUVELHlEQUEyQjs7O0lBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSx3QkFBd0I7U0FDakMsQ0FBQyxDQUFDLENBQUM7UUFDTCxvRkFBb0Y7SUFFckYsQ0FBQzs7Ozs7SUFDRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsYUFBb0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLE1BQU0sRUFBQyxFQUFDLGFBQWEsZUFBQSxFQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsb0ZBQW9GO0lBRXJGLENBQUM7Ozs7O0lBQ0QsK0NBQWlCOzs7O0lBQWpCLFVBQWtCLGFBQW9CO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLElBQUksRUFBRSxhQUFhO1NBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDRiwyQ0FBYTs7OztJQUFiLFVBQWMsU0FBa0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBdENBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs4QkFMbEM7Q0E2Q0MsQUF4Q0QsQ0FFeUMsZUFBZSxHQXNDdkQ7U0F0Q1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEN1bnNlbG9yLCBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q291bnNlbG9yU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XHJcblxyXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9Y291bnNlbG9yL2A7XHJcbiAgfVxyXG5cclxuICBnZXRDb3Vuc2Vsb3JPZmZpY2VUeXBlTGlzdCQoKTogT2JzZXJ2YWJsZTxDdW5zZWxvcltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2dldENvdW5zZWxvck9mZmljZVR5cGUnLFxyXG4gICAgfSkpO1xyXG4gICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxDdW5zZWxvcltdPignaHR0cDovL2xvY2FsaG9zdDozMDMwL2NvdW5zZWxvci9nZXRDb3Vuc2Vsb3InKTtcclxuXHJcbiAgfVxyXG4gIGdldENvdW5zZWxvckxpc3QkKGNvdW5zZWxvclR5cGU6c3RyaW5nKTogT2JzZXJ2YWJsZTxDdW5zZWxvcltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2dldENvdW5zZWxvcicsXHJcbiAgICAgIHBhcmFtczp7Y291bnNlbG9yVHlwZX1cclxuICAgIH0pKTtcclxuICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q3Vuc2Vsb3JbXT4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9jb3Vuc2Vsb3IvZ2V0Q291bnNlbG9yJyk7XHJcblxyXG4gIH1cclxuICBhZGRDb3Vuc2Vsb3JUeXBlJChjb3Vuc2Vsb3JUeXBlOnN0cmluZyk6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICAgIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2FkZENvdW5zZWxvclR5cGUnLFxyXG4gICAgICBib2R5OiBjb3Vuc2Vsb3JUeXBlXHJcbiAgfSkpO1xyXG4gIH1cclxuIGFkZENvdW5zZWxvciQoY291bnNlbG9yOkN1bnNlbG9yKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgYWN0aW9uOiAnYWRkQ291bnNlbG9yJyxcclxuICAgIGJvZHk6IGNvdW5zZWxvclxyXG59KSk7XHJcbn1cclxuXHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get--counselor.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NEVER } from 'rxjs';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var GetCounselorService = /** @class */ (function (_super) {
    tslib_1.__extends(GetCounselorService, _super);
    function GetCounselorService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.counselors$ = NEVER;
        _this.counselors = [];
        return _this;
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
if (false) {
    /** @type {?} */
    GetCounselorService.prototype.counselors$;
    /** @type {?} */
    GetCounselorService.prototype.counselors;
    /** @type {?} */
    GetCounselorService.prototype.cunselorsOfficeType$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LS1jb3Vuc2Vsb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtLWNvdW5zZWxvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQVksZ0JBQWdCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRXREO0lBRXlDLCtDQUFlO0lBRnhEO1FBQUEscUVBNENDO1FBeENDLGlCQUFXLEdBQTJCLEtBQUssQ0FBQztRQUM1QyxnQkFBVSxHQUFZLEVBQUUsQ0FBQzs7S0F1QzFCO0lBcENDLHNCQUFZLDJDQUFVOzs7OztRQUF0QjtZQUNFLE9BQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxlQUFZLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7Ozs7SUFFRCx5REFBMkI7OztJQUEzQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsd0JBQXdCO1NBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsb0ZBQW9GO0lBRXJGLENBQUM7Ozs7O0lBQ0QsK0NBQWlCOzs7O0lBQWpCLFVBQWtCLGFBQW9CO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixNQUFNLEVBQUMsRUFBQyxhQUFhLGVBQUEsRUFBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUNMLG9GQUFvRjtJQUVyRixDQUFDOzs7OztJQUNELCtDQUFpQjs7OztJQUFqQixVQUFrQixhQUFvQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNyQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixJQUFJLEVBQUUsYUFBYTtTQUN0QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ0YsMkNBQWE7Ozs7SUFBYixVQUFjLFNBQWtCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixJQUFJLEVBQUUsU0FBUztTQUNsQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQTFDQSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OEJBTGxDO0NBaURDLEFBNUNELENBRXlDLGVBQWUsR0EwQ3ZEO1NBMUNZLG1CQUFtQjs7O0lBRTlCLDBDQUE0Qzs7SUFDNUMseUNBQXlCOztJQUN6QixtREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5FVkVSLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEN1bnNlbG9yLCBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q291bnNlbG9yU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XHJcblxyXG4gIGNvdW5zZWxvcnMkOiBPYnNlcnZhYmxlPEN1bnNlbG9yW10+ID0gTkVWRVI7XHJcbiAgY291bnNlbG9yczpDdW5zZWxvcltdPVtdO1xyXG4gIGN1bnNlbG9yc09mZmljZVR5cGUkOk9ic2VydmFibGU8Q3Vuc2Vsb3JbXT5cclxuXHJcbiAgcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmlwcy5zZXJ2aWNlUGF0aH1jb3Vuc2Vsb3IvYDtcclxuICB9XHJcblxyXG4gIGdldENvdW5zZWxvck9mZmljZVR5cGVMaXN0JCgpOiBPYnNlcnZhYmxlPEN1bnNlbG9yW10+IHtcclxuICAgIHJldHVybiB0aGlzLmdldCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnZ2V0Q291bnNlbG9yT2ZmaWNlVHlwZScsXHJcbiAgICB9KSk7XHJcbiAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PEN1bnNlbG9yW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMzAvY291bnNlbG9yL2dldENvdW5zZWxvcicpO1xyXG5cclxuICB9XHJcbiAgZ2V0Q291bnNlbG9yTGlzdCQoY291bnNlbG9yVHlwZTpzdHJpbmcpOiBPYnNlcnZhYmxlPEN1bnNlbG9yW10+IHtcclxuICAgIHJldHVybiB0aGlzLmdldCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnZ2V0Q291bnNlbG9yJyxcclxuICAgICAgcGFyYW1zOntjb3Vuc2Vsb3JUeXBlfVxyXG4gICAgfSkpO1xyXG4gICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxDdW5zZWxvcltdPignaHR0cDovL2xvY2FsaG9zdDozMDMwL2NvdW5zZWxvci9nZXRDb3Vuc2Vsb3InKTtcclxuXHJcbiAgfVxyXG4gIGFkZENvdW5zZWxvclR5cGUkKGNvdW5zZWxvclR5cGU6c3RyaW5nKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gICAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgICAgYWN0aW9uOiAnYWRkQ291bnNlbG9yVHlwZScsXHJcbiAgICAgIGJvZHk6IGNvdW5zZWxvclR5cGVcclxuICB9KSk7XHJcbiAgfVxyXG4gYWRkQ291bnNlbG9yJChjb3Vuc2Vsb3I6Q3Vuc2Vsb3IpOk9ic2VydmFibGU8Ym9vbGVhbj57XHJcbiAgcmV0dXJuIHRoaXMucG9zdCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xyXG4gICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICBhY3Rpb246ICdhZGRDb3Vuc2Vsb3InLFxyXG4gICAgYm9keTogY291bnNlbG9yXHJcbn0pKTtcclxufVxyXG5cclxufVxyXG4iXX0=
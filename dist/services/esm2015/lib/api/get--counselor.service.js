/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get--counselor.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class GetCounselorService extends HttpServiceBase {
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}counselor/`;
    }
    /**
     * @return {?}
     */
    getCounselorOfficeTypeList$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselorOfficeType',
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    }
    /**
     * @param {?} counselorType
     * @return {?}
     */
    getCounselorList$(counselorType) {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getCounselor',
            params: { counselorType }
        }));
        // return this.http.get<Cunselor[]>('http://localhost:3030/counselor/getCounselor');
    }
    /**
     * @param {?} counselor
     * @return {?}
     */
    addCounselor$(counselor) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addCounselor',
            body: counselor
        }));
    }
}
GetCounselorService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ GetCounselorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetCounselorService_Factory() { return new GetCounselorService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetCounselorService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LS1jb3Vuc2Vsb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtLWNvdW5zZWxvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQVksZ0JBQWdCLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBS3RELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxlQUFlOzs7OztJQUV0RCxJQUFZLFVBQVU7UUFDcEIsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsWUFBWSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCwyQkFBMkI7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSx3QkFBd0I7U0FDakMsQ0FBQyxDQUFDLENBQUM7UUFDTCxvRkFBb0Y7SUFFckYsQ0FBQzs7Ozs7SUFDRCxpQkFBaUIsQ0FBQyxhQUFvQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsTUFBTSxFQUFDLEVBQUMsYUFBYSxFQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsb0ZBQW9GO0lBRXJGLENBQUM7Ozs7O0lBRUYsYUFBYSxDQUFDLFNBQWtCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixJQUFJLEVBQUUsU0FBUztTQUNsQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7OztZQWpDQSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEN1bnNlbG9yLCBIdHRwUmVxdWVzdE1vZGVsIH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdldENvdW5zZWxvclNlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZUJhc2Uge1xyXG5cclxuICBwcml2YXRlIGdldCBfc2VydmVyVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaXBzLnNlcnZpY2VQYXRofWNvdW5zZWxvci9gO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q291bnNlbG9yT2ZmaWNlVHlwZUxpc3QkKCk6IE9ic2VydmFibGU8Q3Vuc2Vsb3JbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRDb3Vuc2Vsb3JPZmZpY2VUeXBlJyxcclxuICAgIH0pKTtcclxuICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q3Vuc2Vsb3JbXT4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9jb3Vuc2Vsb3IvZ2V0Q291bnNlbG9yJyk7XHJcblxyXG4gIH1cclxuICBnZXRDb3Vuc2Vsb3JMaXN0JChjb3Vuc2Vsb3JUeXBlOnN0cmluZyk6IE9ic2VydmFibGU8Q3Vuc2Vsb3JbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxyXG4gICAgICBhY3Rpb246ICdnZXRDb3Vuc2Vsb3InLFxyXG4gICAgICBwYXJhbXM6e2NvdW5zZWxvclR5cGV9XHJcbiAgICB9KSk7XHJcbiAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PEN1bnNlbG9yW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMzAvY291bnNlbG9yL2dldENvdW5zZWxvcicpO1xyXG5cclxuICB9XHJcbiAgXHJcbiBhZGRDb3Vuc2Vsb3IkKGNvdW5zZWxvcjpDdW5zZWxvcik6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XHJcbiAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcclxuICAgIGFjdGlvbjogJ2FkZENvdW5zZWxvcicsXHJcbiAgICBib2R5OiBjb3Vuc2Vsb3JcclxufSkpO1xyXG59XHJcblxyXG59XHJcbiJdfQ==
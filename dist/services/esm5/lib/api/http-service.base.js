/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/http-service.base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
/**
 * @abstract
 */
var HttpServiceBase = /** @class */ (function () {
    function HttpServiceBase(http, config) {
        this.http = http;
        this.config = config;
        this.index = 0;
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.get$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        if (httpRequest.isText) {
            return this._get$(httpRequest);
        }
        return this.http.get(httpRequest.fullUrl, { params: tslib_1.__assign({}, httpRequest.fullParams) });
    };
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.delete$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.delete(httpRequest.fullUrl, { params: tslib_1.__assign({}, httpRequest.fullParams) });
    };
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.post$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        if (httpRequest.isText) {
            return this._post$(httpRequest);
        }
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: tslib_1.__assign({}, httpRequest.fullParams) });
    };
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.request$ = /**
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.request('GET', httpRequest.fullUrl, {
            params: tslib_1.__assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    };
    /**
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.requestPost$ = /**
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.request('POST', httpRequest.fullUrl, {
            body: tslib_1.__assign({}, httpRequest.body),
            params: tslib_1.__assign({}, httpRequest.fullParams),
            observe: 'response',
            responseType: 'blob',
        });
    };
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype._get$ = /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.get(httpRequest.fullUrl, { params: tslib_1.__assign({}, httpRequest.fullParams), responseType: 'text' });
    };
    /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype._post$ = /**
     * @private
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: tslib_1.__assign({}, httpRequest.fullParams), responseType: 'text' });
    };
    HttpServiceBase.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpServiceBase.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    return HttpServiceBase;
}());
export { HttpServiceBase };
if (false) {
    /** @type {?} */
    HttpServiceBase.prototype.index;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zZXJ2aWNlLmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXJ2aWNlcy8iLCJzb3VyY2VzIjpbImxpYi9hcGkvaHR0cC1zZXJ2aWNlLmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBbUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuSCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBR3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRS9EO0lBSUUseUJBQ1ksSUFBZ0IsRUFDaEIsTUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUh4QyxVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBSU4sQ0FBQzs7Ozs7O0lBRUwsOEJBQUk7Ozs7O0lBQUosVUFBaUIsV0FBNkI7UUFFNUMsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQUU7UUFFM0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSx1QkFBTyxXQUFXLENBQUMsVUFBVSxDQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Ozs7OztJQUVELGlDQUFPOzs7OztJQUFQLFVBQW9CLFdBQTZCO1FBRS9DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sdUJBQU8sV0FBVyxDQUFDLFVBQVUsQ0FBRSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7Ozs7SUFFRCwrQkFBSzs7Ozs7SUFBTCxVQUFrQixXQUE2QjtRQUU3QyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FBRTtRQUM1RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksRUFDNUQsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLHVCQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCxrQ0FBUTs7OztJQUFSLFVBQVMsV0FBNkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDdEIsS0FBSyxFQUNMLFdBQVcsQ0FBQyxPQUFPLEVBQ25CO1lBQ0UsTUFBTSx1QkFBTyxXQUFXLENBQUMsVUFBVSxDQUFFO1lBQ3JDLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFlBQVksRUFBRSxNQUFNO1NBRXJCLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsc0NBQVk7Ozs7SUFBWixVQUFhLFdBQTZCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ3RCLE1BQU0sRUFDTixXQUFXLENBQUMsT0FBTyxFQUNuQjtZQUVFLElBQUksdUJBQU8sV0FBVyxDQUFDLElBQUksQ0FBRTtZQUM3QixNQUFNLHVCQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUU7WUFDckMsT0FBTyxFQUFFLFVBQVU7WUFDbkIsWUFBWSxFQUFFLE1BQU07U0FFckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8sK0JBQUs7Ozs7O0lBQWIsVUFBYyxXQUE2QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLHVCQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM3RyxDQUFDOzs7Ozs7SUFFTyxnQ0FBTTs7Ozs7SUFBZCxVQUFlLFdBQTZCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSx1QkFBTyxXQUFXLENBQUMsVUFBVSxDQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEksQ0FBQzs7Z0JBNURGLFVBQVU7Ozs7Z0JBTkYsVUFBVTtnQkFJVixvQkFBb0I7O0lBZ0U3QixzQkFBQztDQUFBLEFBOURELElBOERDO1NBN0RxQixlQUFlOzs7SUFFbkMsZ0NBQVU7Ozs7O0lBRVIsK0JBQTBCOzs7OztJQUMxQixpQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RNb2RlbCB9IGZyb20gJ3R5cGVzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIdHRwU2VydmljZUJhc2Uge1xyXG4gIFxyXG4gIGluZGV4ID0gMDtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgZ2V0JDxUID0gc3RyaW5nPihodHRwUmVxdWVzdDogSHR0cFJlcXVlc3RNb2RlbCk6IE9ic2VydmFibGU8VD4ge1xyXG5cclxuICAgIGlmIChodHRwUmVxdWVzdC5pc1RleHQpIHsgcmV0dXJuIHRoaXMuX2dldCQoaHR0cFJlcXVlc3QpOyB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4oaHR0cFJlcXVlc3QuZnVsbFVybCwgeyBwYXJhbXM6IHsgLi4uaHR0cFJlcXVlc3QuZnVsbFBhcmFtcyB9IH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlJDxUID0gc3RyaW5nPihodHRwUmVxdWVzdDogSHR0cFJlcXVlc3RNb2RlbCk6IE9ic2VydmFibGU8VD4ge1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFQ+KGh0dHBSZXF1ZXN0LmZ1bGxVcmwsIHsgcGFyYW1zOiB7IC4uLmh0dHBSZXF1ZXN0LmZ1bGxQYXJhbXMgfSB9KTtcclxuICB9XHJcblxyXG4gIHBvc3QkPFQgPSBzdHJpbmc+KGh0dHBSZXF1ZXN0OiBIdHRwUmVxdWVzdE1vZGVsKTogT2JzZXJ2YWJsZTxUPiB7XHJcblxyXG4gICAgaWYgKGh0dHBSZXF1ZXN0LmlzVGV4dCkgeyByZXR1cm4gdGhpcy5fcG9zdCQoaHR0cFJlcXVlc3QpOyB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4oaHR0cFJlcXVlc3QuZnVsbFVybCwgaHR0cFJlcXVlc3QuYm9keSxcclxuICAgICAgeyBoZWFkZXJzOiBodHRwUmVxdWVzdC5oZWFkZXJzLCBwYXJhbXM6IHsgLi4uaHR0cFJlcXVlc3QuZnVsbFBhcmFtcyB9IH0pO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdCQoaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0TW9kZWwpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoXHJcbiAgICAgICdHRVQnLFxyXG4gICAgICBodHRwUmVxdWVzdC5mdWxsVXJsLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7IC4uLmh0dHBSZXF1ZXN0LmZ1bGxQYXJhbXMgfSxcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxyXG5cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0UG9zdCQoaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0TW9kZWwpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QoXHJcbiAgICAgICdQT1NUJyxcclxuICAgICAgaHR0cFJlcXVlc3QuZnVsbFVybCxcclxuICAgICAge1xyXG5cclxuICAgICAgICBib2R5OiB7IC4uLmh0dHBSZXF1ZXN0LmJvZHkgfSxcclxuICAgICAgICBwYXJhbXM6IHsgLi4uaHR0cFJlcXVlc3QuZnVsbFBhcmFtcyB9LFxyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXHJcblxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldCQoaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0TW9kZWwpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoaHR0cFJlcXVlc3QuZnVsbFVybCwgeyBwYXJhbXM6IHsgLi4uaHR0cFJlcXVlc3QuZnVsbFBhcmFtcyB9LCByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3Bvc3QkKGh0dHBSZXF1ZXN0OiBIdHRwUmVxdWVzdE1vZGVsKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChodHRwUmVxdWVzdC5mdWxsVXJsLCBodHRwUmVxdWVzdC5ib2R5LCB7IHBhcmFtczogeyAuLi5odHRwUmVxdWVzdC5mdWxsUGFyYW1zIH0sIHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
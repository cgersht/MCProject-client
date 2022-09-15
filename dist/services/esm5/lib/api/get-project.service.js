/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-project.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var GetProjectService = /** @class */ (function (_super) {
    tslib_1.__extends(GetProjectService, _super);
    function GetProjectService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetProjectService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "project/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GetProjectService.prototype.getProjectList$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getProject',
        }));
        // return this.http.get<Project[]>('localhost:3030/project/getProject');
    };
    /**
     * @param {?} project
     * @return {?}
     */
    GetProjectService.prototype.addProject$ = /**
     * @param {?} project
     * @return {?}
     */
    function (project) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addProject',
            body: project
        }));
    };
    GetProjectService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ GetProjectService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetProjectService_Factory() { return new GetProjectService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetProjectService, providedIn: "root" });
    return GetProjectService;
}(HttpServiceBase));
export { GetProjectService };
if (false) {
    /** @type {?} */
    GetProjectService.prototype.selectedProject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXByb2plY3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL2FwaS9nZXQtcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUV0RDtJQUd1Qyw2Q0FBZTtJQUh0RDs7S0F3QkM7SUFuQkMsc0JBQVkseUNBQVU7Ozs7O1FBQXRCO1lBQ0UsT0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLGFBQVUsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTs7OztJQUVELDJDQUFlOzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsWUFBWTtTQUNyQixDQUFDLENBQUMsQ0FBQztRQUNKLHdFQUF3RTtJQUMxRSxDQUFDOzs7OztJQUVGLHVDQUFXOzs7O0lBQVgsVUFBWSxPQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7O2dCQXZCQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBUkQ7Q0E4QkMsQUF4QkQsQ0FHdUMsZUFBZSxHQXFCckQ7U0FyQlksaUJBQWlCOzs7SUFDOUIsNENBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAndHlwZXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0TW9kZWwgfSBmcm9tICd0eXBlcyc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vaHR0cC1zZXJ2aWNlLmJhc2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvamVjdFNlcnZpY2UgZXh0ZW5kcyBIdHRwU2VydmljZUJhc2Uge1xyXG5zZWxlY3RlZFByb2plY3Q6YW55O1xyXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9cHJvamVjdC9gO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdExpc3QkKCk6IE9ic2VydmFibGU8UHJvamVjdFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2dldFByb2plY3QnLFxyXG4gICAgfSkpO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvamVjdFtdPignbG9jYWxob3N0OjMwMzAvcHJvamVjdC9nZXRQcm9qZWN0Jyk7XHJcbiAgfVxyXG5cclxuIGFkZFByb2plY3QkKHByb2plY3Q6UHJvamVjdCk6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICAgIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcclxuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXHJcbiAgICAgIGFjdGlvbjogJ2FkZFByb2plY3QnLFxyXG4gICAgICBib2R5OiBwcm9qZWN0XHJcbiAgfSkpO1xyXG59XHJcbn1cclxuXHJcbiAgIl19
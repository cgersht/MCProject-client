/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-entrepreneur.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var GetEntrepreneurService = /** @class */ (function (_super) {
    tslib_1.__extends(GetEntrepreneurService, _super);
    function GetEntrepreneurService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private get _serverUrl(): string {
    //   return `${this.config.ips.servicePath}counselor/`;
    // }
    // private get _serverUrl(): string {
    //   return `${this.config.ips.servicePath}counselor/`;
    // }
    /**
     * @return {?}
     */
    GetEntrepreneurService.prototype.getEntrepreneurList$ = 
    // private get _serverUrl(): string {
    //   return `${this.config.ips.servicePath}counselor/`;
    // }
    /**
     * @return {?}
     */
    function () {
        // return this.get$(new HttpRequestModel({
        //   url: this._serverUrl,
        //   action: 'getCounselor',
        // }));
        return this.http.get('http://localhost:3030/entrepreneur/getEntrepreneur');
    };
    GetEntrepreneurService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ GetEntrepreneurService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetEntrepreneurService_Factory() { return new GetEntrepreneurService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetEntrepreneurService, providedIn: "root" });
    return GetEntrepreneurService;
}(HttpServiceBase));
export { GetEntrepreneurService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVudHJlcHJlbmV1ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL2dldC1lbnRyZXByZW5ldXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUV0RDtJQUc0QyxrREFBZTtJQUgzRDs7S0FtQkM7SUFkQyxxQ0FBcUM7SUFDckMsdURBQXVEO0lBQ3ZELElBQUk7Ozs7Ozs7SUFJSixxREFBb0I7Ozs7Ozs7SUFBcEI7UUFDRSwwQ0FBMEM7UUFDMUMsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1QixPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBaUIsb0RBQW9ELENBQUMsQ0FBQztJQUU3RixDQUFDOztnQkFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O2lDQUxsQztDQXdCQyxBQW5CRCxDQUc0QyxlQUFlLEdBZ0IxRDtTQWhCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFbnRyZXByZW5ldXIsIEh0dHBSZXF1ZXN0TW9kZWwgfSBmcm9tICd0eXBlcyc7XG5pbXBvcnQgeyBIdHRwU2VydmljZUJhc2UgfSBmcm9tICcuL2h0dHAtc2VydmljZS5iYXNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcblxuXG5leHBvcnQgY2xhc3MgR2V0RW50cmVwcmVuZXVyU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSB7XG5cbiAgLy8gcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xuICAvLyAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9Y291bnNlbG9yL2A7XG4gIC8vIH1cblxuXG5cbiAgZ2V0RW50cmVwcmVuZXVyTGlzdCQoKTogT2JzZXJ2YWJsZTxFbnRyZXByZW5ldXJbXT4ge1xuICAgIC8vIHJldHVybiB0aGlzLmdldCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgIC8vICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgLy8gICBhY3Rpb246ICdnZXRDb3Vuc2Vsb3InLFxuICAgIC8vIH0pKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxFbnRyZXByZW5ldXJbXT4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9lbnRyZXByZW5ldXIvZ2V0RW50cmVwcmVuZXVyJyk7XG5cbiAgfVxufVxuXG4vLyJdfQ==
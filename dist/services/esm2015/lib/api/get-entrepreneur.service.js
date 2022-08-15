/**
 * @fileoverview added by tsickle
 * Generated from: lib/api/get-entrepreneur.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class GetEntrepreneurService extends HttpServiceBase {
    // private get _serverUrl(): string {
    //   return `${this.config.ips.servicePath}counselor/`;
    // }
    /**
     * @return {?}
     */
    getEntrepreneurList$() {
        // return this.get$(new HttpRequestModel({
        //   url: this._serverUrl,
        //   action: 'getCounselor',
        // }));
        return this.http.get('http://localhost:3030/entrepreneur/getEntrepreneur');
    }
}
GetEntrepreneurService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ GetEntrepreneurService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GetEntrepreneurService_Factory() { return new GetEntrepreneurService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: GetEntrepreneurService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVudHJlcHJlbmV1ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvYXBpL2dldC1lbnRyZXByZW5ldXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBS3RELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxlQUFlOzs7Ozs7O0lBUXpELG9CQUFvQjtRQUNsQiwwQ0FBMEM7UUFDMUMsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1QixPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBaUIsb0RBQW9ELENBQUMsQ0FBQztJQUU3RixDQUFDOzs7WUFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVudHJlcHJlbmV1ciwgSHR0cFJlcXVlc3RNb2RlbCB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCB7IEh0dHBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vaHR0cC1zZXJ2aWNlLmJhc2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuXG5cbmV4cG9ydCBjbGFzcyBHZXRFbnRyZXByZW5ldXJTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlIHtcblxuICAvLyBwcml2YXRlIGdldCBfc2VydmVyVXJsKCk6IHN0cmluZyB7XG4gIC8vICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmlwcy5zZXJ2aWNlUGF0aH1jb3Vuc2Vsb3IvYDtcbiAgLy8gfVxuXG5cblxuICBnZXRFbnRyZXByZW5ldXJMaXN0JCgpOiBPYnNlcnZhYmxlPEVudHJlcHJlbmV1cltdPiB7XG4gICAgLy8gcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgLy8gICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAvLyAgIGFjdGlvbjogJ2dldENvdW5zZWxvcicsXG4gICAgLy8gfSkpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEVudHJlcHJlbmV1cltdPignaHR0cDovL2xvY2FsaG9zdDozMDMwL2VudHJlcHJlbmV1ci9nZXRFbnRyZXByZW5ldXInKTtcblxuICB9XG59XG5cbi8vIl19
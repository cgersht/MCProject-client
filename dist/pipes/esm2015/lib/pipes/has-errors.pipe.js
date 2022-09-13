/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/has-errors.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class HasErrorsPipe {
    /**
     * @param {?} formGroup
     * @param {?} controlName
     * @return {?}
     */
    transform(formGroup, controlName) {
        return !!Object.keys(formGroup.controls[controlName].errors).length;
    }
}
HasErrorsPipe.decorators = [
    { type: Pipe, args: [{ name: 'hasErrors' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzLWVycm9ycy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlwZXMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaGFzLWVycm9ycy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFJcEQsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUV4QixTQUFTLENBQUMsU0FBb0IsRUFBRSxXQUFrQjtRQUNoRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFFO0lBQ3ZFLENBQUM7OztZQUxGLElBQUksU0FBQyxFQUFHLElBQUksRUFBRSxXQUFXLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBQaXBlKHsgIG5hbWU6ICdoYXNFcnJvcnMnfSlcbmV4cG9ydCBjbGFzcyBIYXNFcnJvcnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBjb250cm9sTmFtZTpzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiAhIU9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9sc1tjb250cm9sTmFtZV0uZXJyb3JzKS5sZW5ndGggO1xuICB9XG5cbn1cbiJdfQ==
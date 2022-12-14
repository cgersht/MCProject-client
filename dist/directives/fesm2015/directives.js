import { Injectable, ɵɵdefineInjectable, Component, Directive, ElementRef, Input, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectivesService {
    constructor() { }
}
DirectivesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DirectivesService.ctorParameters = () => [];
/** @nocollapse */ DirectivesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DirectivesService_Factory() { return new DirectivesService(); }, token: DirectivesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectivesComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DirectivesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-directives',
                template: `
    <p>
      directives works!
    </p>
  `
            }] }
];
/** @nocollapse */
DirectivesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/copy.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CopyDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set copy(value) {
        this._value = value;
    }
    /**
     * @return {?}
     */
    click() {
        /** @type {?} */
        const input = document.createElement('input');
        input.value = this._value || ((/** @type {?} */ (this.el.nativeElement))).innerText;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
    }
}
CopyDirective.decorators = [
    { type: Directive, args: [{ selector: '[libCopy]' },] }
];
/** @nocollapse */
CopyDirective.ctorParameters = () => [
    { type: ElementRef }
];
CopyDirective.propDecorators = {
    copy: [{ type: Input, args: ['copy',] }],
    click: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CopyDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    CopyDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectivesModule {
}
DirectivesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DirectivesComponent, CopyDirective],
                imports: [
                    CommonModule
                ],
                exports: [DirectivesComponent,
                    CopyDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: directives.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DirectivesComponent, DirectivesModule, DirectivesService, CopyDirective as ɵa };
//# sourceMappingURL=directives.js.map

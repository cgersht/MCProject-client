import { Injectable, ɵɵdefineInjectable, Component, Directive, ElementRef, Input, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DirectivesService = /** @class */ (function () {
    function DirectivesService() {
    }
    DirectivesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DirectivesService.ctorParameters = function () { return []; };
    /** @nocollapse */ DirectivesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DirectivesService_Factory() { return new DirectivesService(); }, token: DirectivesService, providedIn: "root" });
    return DirectivesService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DirectivesComponent = /** @class */ (function () {
    function DirectivesComponent() {
    }
    /**
     * @return {?}
     */
    DirectivesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DirectivesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-directives',
                    template: "\n    <p>\n      directives works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    DirectivesComponent.ctorParameters = function () { return []; };
    return DirectivesComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/copy.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CopyDirective = /** @class */ (function () {
    function CopyDirective(el) {
        this.el = el;
    }
    Object.defineProperty(CopyDirective.prototype, "copy", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CopyDirective.prototype.click = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var input = document.createElement('input');
        input.value = this._value || ((/** @type {?} */ (this.el.nativeElement))).innerText;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
    };
    CopyDirective.decorators = [
        { type: Directive, args: [{ selector: '[libCopy]' },] }
    ];
    /** @nocollapse */
    CopyDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    CopyDirective.propDecorators = {
        copy: [{ type: Input, args: ['copy',] }],
        click: [{ type: HostListener, args: ['click',] }]
    };
    return CopyDirective;
}());
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
var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
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
    return DirectivesModule;
}());

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

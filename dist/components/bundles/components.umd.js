(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material'), require('@angular/material/table'), require('directives'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('components', ['exports', '@angular/core', '@angular/common', '@angular/material', '@angular/material/table', 'directives', '@angular/forms'], factory) :
    (global = global || self, factory(global.components = {}, global.ng.core, global.ng.common, global.ng.material, global.ng.material.table, global.directives, global.ng.forms));
}(this, (function (exports, core, common, material, table, directives, forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsService = /** @class */ (function () {
        function ComponentsService() {
        }
        ComponentsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ComponentsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
        return ComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsComponent = /** @class */ (function () {
        function ComponentsComponent() {
        }
        /**
         * @return {?}
         */
        ComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ComponentsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-components',
                        template: "\n    <p>\n      components works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ComponentsComponent.ctorParameters = function () { return []; };
        return ComponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/clock-and-date/clock-and-date.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ClockAndDateComponent = /** @class */ (function () {
        function ClockAndDateComponent(zone, cd) {
            this.zone = zone;
            this.cd = cd;
            this.time = '00:00';
            this.isDestroy = false;
        }
        /**
         * @return {?}
         */
        ClockAndDateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.cd.detach();
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.setTime(); }));
        };
        /**
         * @return {?}
         */
        ClockAndDateComponent.prototype.setTime = /**
         * @return {?}
         */
        function () {
            if (this.isDestroy) {
                return;
            }
            /** @type {?} */
            var now = new Date();
            this.time = now.getHours() + ":" + this.formatNum(now.getMinutes());
            this.cd.detectChanges();
            setTimeout(this.setTime.bind(this), 6000);
        };
        /**
         * @param {?} i
         * @return {?}
         */
        ClockAndDateComponent.prototype.formatNum = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            return i < 10 ? "0" + i : i;
        };
        /**
         * @return {?}
         */
        ClockAndDateComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.isDestroy = true;
        };
        ClockAndDateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-clock-and-date',
                        template: "<p>clock-and-date works!</p>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ClockAndDateComponent.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: core.ChangeDetectorRef }
        ]; };
        return ClockAndDateComponent;
    }());
    if (false) {
        /** @type {?} */
        ClockAndDateComponent.prototype.time;
        /** @type {?} */
        ClockAndDateComponent.prototype.isDestroy;
        /**
         * @type {?}
         * @private
         */
        ClockAndDateComponent.prototype.zone;
        /**
         * @type {?}
         * @private
         */
        ClockAndDateComponent.prototype.cd;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        ComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ComponentsComponent, ClockAndDateComponent],
                        imports: [],
                        exports: [ComponentsComponent]
                    },] }
        ];
        return ComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table/table.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableComponent = /** @class */ (function () {
        function TableComponent(dialog) {
            this.dialog = dialog;
            // @Input() tableType:tableTypeEnum;
            this.dbClick = new core.EventEmitter();
            this.displayedColumns = [];
        }
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.displayedColumns = _this.columns.map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var name = _a.name;
                    return name;
                }));
            }), 200);
            this.dataSource = new material.MatTableDataSource(this.rows);
            this.dataSource.paginator = this.paginator;
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        TableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var rows = changes.rows;
            if (rows) {
                this.dataSource = new material.MatTableDataSource(rows.currentValue);
                this.dataSource.paginator = this.paginator;
            }
        };
        /**
         * @param {?} row
         * @return {?}
         */
        TableComponent.prototype.getRecord = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            this.dbClick.emit(row);
        };
        TableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-table',
                        template: " \r\n<div class=\"mat-elevation-z8 mat-table\">\r\n  <mat-table [dataSource]=\"dataSource\" >\r\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=  \"column.name\">\r\n \r\n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\"> </mat-header-cell>\r\n       <mat-cell *matCellDef=\"let element\" > \r\n            <span [innerText]=\"element[column.name]\" libCopy></span> \r\n\r\n       </mat-cell> \r\n     \r\n  </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" ></mat-header-row>  \r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (dblclick)=\"getRecord(row)\"></mat-row>\r\n  \r\n  </mat-table>  \r\n\r\n<!-- <div class=\"paginator\">\r\n  <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"  showFirstLastButtons ></mat-paginator>  \r\n  </div> -->\r\n</div>\r\n\r\n ",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["body{font-family:\"Segoe UI\",Tahoma,Geneva,Verdana,sans-serif;direction:rtl}body *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;text-decoration:none}body a{color:#000}body .mat-select-panel.custom-select .mat-option{height:100px}:host{display:flex;flex-direction:column;overflow:hidden!important}:host .example-container.mat-elevation-z8{overflow-y:auto}:host mat-table{overflow:hidden;overflow-y:auto}:host .newButton{top:250px}mat-cell,mat-footer-cell,mat-header-cell{width:150px;justify-content:center}::ng-deep .mat-elevation-z8{overflow:scroll!important}.mat-table mat-header-cell{border-top:1px solid;border-right:1px solid;border-bottom:1px solid;cursor:col-resize}.mat-table mat-cell{border-right:1px solid;border-bottom:1px solid}.mat-button-base{top:37vh!important;box-sizing:border-box;position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () { return [
            { type: material.MatDialog }
        ]; };
        TableComponent.propDecorators = {
            columns: [{ type: core.Input }],
            rows: [{ type: core.Input }],
            dbClick: [{ type: core.Output }],
            paginator: [{ type: core.ViewChild, args: [material.MatPaginator, { static: true },] }]
        };
        return TableComponent;
    }());
    if (false) {
        /** @type {?} */
        TableComponent.prototype.columns;
        /** @type {?} */
        TableComponent.prototype.rows;
        /** @type {?} */
        TableComponent.prototype.dbClick;
        /** @type {?} */
        TableComponent.prototype.displayedColumns;
        /** @type {?} */
        TableComponent.prototype.dataSource;
        /** @type {?} */
        TableComponent.prototype.paginator;
        /** @type {?} */
        TableComponent.prototype.dialog;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/clock/clock.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ClockComponent = /** @class */ (function () {
        function ClockComponent(zone, cd) {
            this.zone = zone;
            this.cd = cd;
            this.time = '00:00';
            this.isDestroy = false;
        }
        /**
         * @return {?}
         */
        ClockComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.cd.detach();
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.setTime(); }));
        };
        /**
         * @return {?}
         */
        ClockComponent.prototype.setTime = /**
         * @return {?}
         */
        function () {
            if (this.isDestroy) {
                return;
            }
            /** @type {?} */
            var now = new Date();
            this.time = now.getHours() + ":" + this.formatNum(now.getMinutes());
            this.cd.detectChanges();
            setTimeout(this.setTime.bind(this), 6000);
        };
        /**
         * @param {?} i
         * @return {?}
         */
        ClockComponent.prototype.formatNum = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            return i < 10 ? "0" + i : i;
        };
        /**
         * @return {?}
         */
        ClockComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.isDestroy = true;
        };
        ClockComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-clock',
                        template: "<span [innerText]=\"'time'\"></span>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ClockComponent.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: core.ChangeDetectorRef }
        ]; };
        return ClockComponent;
    }());
    if (false) {
        /** @type {?} */
        ClockComponent.prototype.time;
        /** @type {?} */
        ClockComponent.prototype.isDestroy;
        /**
         * @type {?}
         * @private
         */
        ClockComponent.prototype.zone;
        /**
         * @type {?}
         * @private
         */
        ClockComponent.prototype.cd;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/clock/clock.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ClockModule = /** @class */ (function () {
        function ClockModule() {
        }
        ClockModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ClockComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [ClockComponent],
                        entryComponents: [ClockComponent]
                    },] }
        ];
        return ClockModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table/table.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
        TableModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TableComponent],
                        imports: [
                            common.CommonModule,
                            table.MatTableModule,
                            material.MatPaginatorModule,
                            material.MatButtonModule,
                            directives.DirectivesModule,
                            material.MatDialogModule,
                            forms.FormsModule,
                            ClockModule,
                        ],
                        exports: [TableComponent],
                    },] }
        ];
        return TableModule;
    }());

    exports.ComponentsComponent = ComponentsComponent;
    exports.ComponentsModule = ComponentsModule;
    exports.ComponentsService = ComponentsService;
    exports.TableModule = TableModule;
    exports.ɵa = ClockAndDateComponent;
    exports.ɵb = TableComponent;
    exports.ɵc = ClockModule;
    exports.ɵd = ClockComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components.umd.js.map

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.dbClick = new EventEmitter();
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
        this.dataSource = new MatTableDataSource(this.rows);
        //this.dataSource.paginator = this.paginator;
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
            this.dataSource = new MatTableDataSource(rows.currentValue);
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
        { type: Component, args: [{
                    selector: 'lib-table',
                    template: " \r\n<div class=\"mat-elevation-z8 table\">\r\n  <mat-table [dataSource]=\"dataSource\" >\r\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=  \"column.name\">\r\n \r\n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\"> </mat-header-cell>\r\n       <mat-cell *matCellDef=\"let element\" > \r\n            <span [innerText]=\"element[column.name]\" libCopy></span> \r\n\r\n       </mat-cell> \r\n     \r\n  </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" ></mat-header-row>  \r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (dblclick)=\"getRecord(row)\"></mat-row>\r\n  \r\n  </mat-table>  \r\n  <!-- <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"  showFirstLastButtons ></mat-paginator>   -->\r\n\r\n</div>\r\n<div class=\"actions\">\r\n  <button mat-button [innerText]=\"'\u05D7\u05D3\u05E9'\"> </button>\r\n</div>\r\n ",
                    encapsulation: ViewEncapsulation.None,
                    styles: [":host{display:flex;flex-direction:column}:host .table{flex:1 1 auto}:host .actions{flex:0 0 auto;height:200px}.mat-elevation-z8{margin-top:-260px}.mat-table{width:100%;overflow:auto;top:200px}mat-cell,mat-footer-cell,mat-header-cell{width:150px;flex:none;justify-content:center}.mat-table mat-cell:first-child{padding-left:0;border-left:1px solid}.mat-table mat-cell:last-child{padding-right:0}.mat-table mat-header-cell:first-child{padding-left:0;border-left:1px solid}.mat-table mat-header-cell:last-child{padding-right:0}.mat-table mat-header-cell{border-top:1px solid;border-right:1px solid;border-bottom:1px solid;cursor:col-resize}.mat-table mat-cell{border-right:1px solid;border-bottom:1px solid}"]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return []; };
    TableComponent.propDecorators = {
        columns: [{ type: Input }],
        rows: [{ type: Input }],
        tableType: [{ type: Input }],
        dbClick: [{ type: Output }],
        paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }]
    };
    return TableComponent;
}());
export { TableComponent };
if (false) {
    /** @type {?} */
    TableComponent.prototype.columns;
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.tableType;
    /** @type {?} */
    TableComponent.prototype.dbClick;
    /** @type {?} */
    TableComponent.prototype.displayedColumns;
    /** @type {?} */
    TableComponent.prototype.dataSource;
    /** @type {?} */
    TableComponent.prototype.paginator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBR3pEO0lBa0JFO1FBUFUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUMscUJBQWdCLEdBQVksRUFBRSxDQUFBO0lBTWQsQ0FBQzs7OztJQUVqQixpQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsRUFBTTtvQkFBTCxjQUFJO2dCQUFNLE9BQUEsSUFBSTtZQUFKLENBQUksRUFBSSxDQUFBO1FBQy9ELENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUdQLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsNkNBQTZDO0lBQy9DLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ3hCLElBQUEsbUJBQUk7UUFDWCxJQUFHLElBQUksRUFBQztZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QztJQUNKLENBQUM7Ozs7O0lBRUQsa0NBQVM7Ozs7SUFBVCxVQUFVLEdBQUc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix1NUJBQXFDO29CQUVyQyxhQUFhLEVBQUMsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7OzswQkFHRSxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxNQUFNOzRCQU1OLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztJQXdCekMscUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQW5DWSxjQUFjOzs7SUFFekIsaUNBQTBCOztJQUMxQiw4QkFBb0I7O0lBQ3BCLG1DQUF5Qjs7SUFDekIsaUNBQTRDOztJQUM1QywwQ0FBOEI7O0lBQzlCLG9DQUFVOztJQUlWLG1DQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICd0eXBlcyc7IFxyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG4gXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246Vmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiBcclxuICBASW5wdXQoKSBjb2x1bW5zOkNvbHVtbltdO1xyXG4gIEBJbnB1dCgpIHJvd3M6YW55W107XHJcbiAgQElucHV0KCkgdGFibGVUeXBlOmFueVtdO1xyXG4gIEBPdXRwdXQoKSBkYkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPVtdXHJcbiAgZGF0YVNvdXJjZSBcclxuICAgIFxyXG4gICAgXHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcCgoe25hbWV9KSA9PiBuYW1lICAgKVxyXG4gICAgfSwgMjAwKTtcclxuICAgICAgXHJcbiAgICBcclxuICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4odGhpcy5yb3dzKTtcclxuICAgIC8vdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgIGNvbnN0IHtyb3dzfSA9IGNoYW5nZXM7XHJcbiAgICAgaWYocm93cyl7XHJcbiAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4ocm93cy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xyXG4gICAgIH1cclxuICB9XHJcblxyXG4gIGdldFJlY29yZChyb3cpe1xyXG4gICAgICB0aGlzLmRiQ2xpY2suZW1pdChyb3cpOyAgIFxyXG4gIH1cclxufVxyXG4iXX0=
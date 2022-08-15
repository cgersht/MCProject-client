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
                    template: " \n<div class=\"mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" >\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=  \"column.name\">\n \n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\"> </mat-header-cell>\n       <mat-cell *matCellDef=\"let element\" > \n            <span [innerText]=\"element[column.name]\" libCopy></span> \n\n       </mat-cell> \n     \n  </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" ></mat-header-row>  \n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (dblclick)=\"getRecord(row)\"></mat-row>\n  \n  </mat-table>  \n  <!-- <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"  showFirstLastButtons ></mat-paginator>   -->\n\n</div>\n ",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".mat-elevation-z8{margin-top:-260px}.mat-table{width:100%;overflow:auto;top:200px}mat-cell,mat-footer-cell,mat-header-cell{width:150px;flex:none;justify-content:center}.mat-table mat-cell:first-child{padding-left:0;border-left:1px solid}.mat-table mat-cell:last-child{padding-right:0}.mat-table mat-header-cell:first-child{padding-left:0;border-left:1px solid}.mat-table mat-header-cell:last-child{padding-right:0}.mat-table mat-header-cell{border-top:1px solid;border-right:1px solid;border-bottom:1px solid;cursor:col-resize}.mat-table mat-cell{border-right:1px solid;border-bottom:1px solid}"]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return []; };
    TableComponent.propDecorators = {
        columns: [{ type: Input }],
        rows: [{ type: Input }],
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
    TableComponent.prototype.dbClick;
    /** @type {?} */
    TableComponent.prototype.displayedColumns;
    /** @type {?} */
    TableComponent.prototype.dataSource;
    /** @type {?} */
    TableComponent.prototype.paginator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBR3pEO0lBaUJFO1FBUFUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUMscUJBQWdCLEdBQVksRUFBRSxDQUFBO0lBTWQsQ0FBQzs7OztJQUVqQixpQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsRUFBTTtvQkFBTCxjQUFJO2dCQUFNLE9BQUEsSUFBSTtZQUFKLENBQUksRUFBSSxDQUFBO1FBQy9ELENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUdQLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsNkNBQTZDO0lBQy9DLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ3hCLElBQUEsbUJBQUk7UUFDWCxJQUFHLElBQUksRUFBQztZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QztJQUNKLENBQUM7Ozs7O0lBRUQsa0NBQVM7Ozs7SUFBVCxVQUFVLEdBQUc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiw4dkJBQXFDO29CQUVyQyxhQUFhLEVBQUMsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7OzswQkFHRSxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsTUFBTTs0QkFNTixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7SUF3QnpDLHFCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FsQ1ksY0FBYzs7O0lBRXpCLGlDQUEwQjs7SUFDMUIsOEJBQW9COztJQUNwQixpQ0FBNEM7O0lBQzVDLDBDQUE4Qjs7SUFDOUIsb0NBQVU7O0lBSVYsbUNBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICd0eXBlcyc7IFxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG4gXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246Vmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiBcbiAgQElucHV0KCkgY29sdW1uczpDb2x1bW5bXTtcbiAgQElucHV0KCkgcm93czphbnlbXTtcbiAgQE91dHB1dCgpIGRiQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPVtdXG4gIGRhdGFTb3VyY2UgXG4gICAgXG4gICAgXG5cbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoKHtuYW1lfSkgPT4gbmFtZSAgIClcbiAgICB9LCAyMDApO1xuICAgICAgXG4gICAgXG4gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pih0aGlzLnJvd3MpO1xuICAgIC8vdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICBjb25zdCB7cm93c30gPSBjaGFuZ2VzO1xuICAgICBpZihyb3dzKXtcbiAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4ocm93cy5jdXJyZW50VmFsdWUpO1xuICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgfVxuICB9XG5cbiAgZ2V0UmVjb3JkKHJvdyl7XG4gICAgICB0aGlzLmRiQ2xpY2suZW1pdChyb3cpOyAgIFxuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
export class TableComponent {
    constructor() {
        // @Input() tableType:tableTypeEnum;
        this.dbClick = new EventEmitter();
        this.displayedColumns = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.displayedColumns = this.columns.map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ name }) => name));
        }), 200);
        this.dataSource = new MatTableDataSource(this.rows);
        //this.dataSource.paginator = this.paginator;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { rows } = changes;
        if (rows) {
            this.dataSource = new MatTableDataSource(rows.currentValue);
            this.dataSource.paginator = this.paginator;
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getRecord(row) {
        this.dbClick.emit(row);
    }
    /**
     * @return {?}
     */
    onNewClick() {
        // switch(this.tableType){
        // case tableTypeEnum.Project:
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-table',
                template: " \r\n<div class=\"mat-elevation-z8 table\">\r\n  <mat-table [dataSource]=\"dataSource\" >\r\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=  \"column.name\">\r\n \r\n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\"> </mat-header-cell>\r\n       <mat-cell *matCellDef=\"let element\" > \r\n            <span [innerText]=\"element[column.name]\" libCopy></span> \r\n\r\n       </mat-cell> \r\n     \r\n  </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" ></mat-header-row>  \r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (dblclick)=\"getRecord(row)\"></mat-row>\r\n  \r\n  </mat-table>  \r\n  <!-- <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"  showFirstLastButtons ></mat-paginator>   -->\r\n\r\n</div>\r\n<div class=\"actions\">\r\n  <button mat-button [innerText]=\"'\u05D7\u05D3\u05E9'\" (click)=\"onNewClick()\"> </button>\r\n</div>\r\n ",
                encapsulation: ViewEncapsulation.None,
                styles: [":host{display:flex;flex-direction:column}:host .table{flex:1 1 auto}:host .actions{flex:0 0 auto;height:200px}.mat-elevation-z8{margin-top:-260px}.mat-table{width:100%;overflow:auto;top:200px}mat-cell,mat-footer-cell,mat-header-cell{width:150px;flex:none;justify-content:center}.mat-table mat-cell:first-child{padding-left:0;border-left:1px solid}.mat-table mat-cell:last-child{padding-right:0}.mat-table mat-header-cell:first-child{padding-left:0;border-left:1px solid}.mat-table mat-header-cell:last-child{padding-right:0}.mat-table mat-header-cell{border-top:1px solid;border-right:1px solid;border-bottom:1px solid;cursor:col-resize}.mat-table mat-cell{border-right:1px solid;border-bottom:1px solid}"]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    columns: [{ type: Input }],
    rows: [{ type: Input }],
    dbClick: [{ type: Output }],
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBU3pELE1BQU0sT0FBTyxjQUFjO0lBWXpCOztRQVBVLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzVDLHFCQUFnQixHQUFZLEVBQUUsQ0FBQTtJQU1kLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBSSxDQUFBO1FBQy9ELENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUdQLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsNkNBQTZDO0lBQy9DLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO2NBQ3pCLEVBQUMsSUFBSSxFQUFDLEdBQUcsT0FBTztRQUN0QixJQUFHLElBQUksRUFBQztZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QztJQUNKLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQUc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLDBCQUEwQjtRQUN4Qiw4QkFBOEI7SUFFaEMsQ0FBQzs7O1lBOUNKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsZzdCQUFxQztnQkFFckMsYUFBYSxFQUFDLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7OztzQkFHRSxLQUFLO21CQUNMLEtBQUs7c0JBRUwsTUFBTTt3QkFNTixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7OztJQVR2QyxpQ0FBMEI7O0lBQzFCLDhCQUFvQjs7SUFFcEIsaUNBQTRDOztJQUM1QywwQ0FBOEI7O0lBQzlCLG9DQUFVOztJQUlWLG1DQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICd0eXBlcyc7IFxyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG4gXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246Vmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiBcclxuICBASW5wdXQoKSBjb2x1bW5zOkNvbHVtbltdO1xyXG4gIEBJbnB1dCgpIHJvd3M6YW55W107XHJcbiAgLy8gQElucHV0KCkgdGFibGVUeXBlOnRhYmxlVHlwZUVudW07XHJcbiAgQE91dHB1dCgpIGRiQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9W11cclxuICBkYXRhU291cmNlIFxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKCh7bmFtZX0pID0+IG5hbWUgICApXHJcbiAgICB9LCAyMDApO1xyXG4gICAgICBcclxuICAgIFxyXG4gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pih0aGlzLnJvd3MpO1xyXG4gICAgLy90aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgY29uc3Qge3Jvd3N9ID0gY2hhbmdlcztcclxuICAgICBpZihyb3dzKXtcclxuICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pihyb3dzLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XHJcbiAgICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVjb3JkKHJvdyl7XHJcbiAgICAgIHRoaXMuZGJDbGljay5lbWl0KHJvdyk7ICAgXHJcbiAgfVxyXG5cclxuICBvbk5ld0NsaWNrKCl7XHJcbiAgICAvLyBzd2l0Y2godGhpcy50YWJsZVR5cGUpe1xyXG4gICAgICAvLyBjYXNlIHRhYmxlVHlwZUVudW0uUHJvamVjdDpcclxuXHJcbiAgICB9XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==
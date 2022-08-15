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
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-table',
                template: " \n<div class=\"mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" >\n  <ng-container *ngFor=\"let column of columns\" [matColumnDef]=  \"column.name\">\n \n      <mat-header-cell *matHeaderCellDef [innerText]=\"column.header\"> </mat-header-cell>\n       <mat-cell *matCellDef=\"let element\" > \n            <span [innerText]=\"element[column.name]\" libCopy></span> \n\n       </mat-cell> \n     \n  </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" ></mat-header-row>  \n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (dblclick)=\"getRecord(row)\"></mat-row>\n  \n  </mat-table>  \n  <!-- <mat-paginator  [pageSizeOptions]=\"[5, 10, 20]\"  showFirstLastButtons ></mat-paginator>   -->\n\n</div>\n ",
                encapsulation: ViewEncapsulation.None,
                styles: [".mat-elevation-z8{margin-top:-260px}.mat-table{width:100%;overflow:auto;top:200px}mat-cell,mat-footer-cell,mat-header-cell{width:150px;flex:none;justify-content:center}.mat-table mat-cell:first-child{padding-left:0;border-left:1px solid}.mat-table mat-cell:last-child{padding-right:0}.mat-table mat-header-cell:first-child{padding-left:0;border-left:1px solid}.mat-table mat-header-cell:last-child{padding-right:0}.mat-table mat-header-cell{border-top:1px solid;border-right:1px solid;border-bottom:1px solid;cursor:col-resize}.mat-table mat-cell{border-right:1px solid;border-bottom:1px solid}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBU3pELE1BQU0sT0FBTyxjQUFjO0lBV3pCO1FBUFUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUMscUJBQWdCLEdBQVksRUFBRSxDQUFBO0lBTWQsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFJLENBQUE7UUFDL0QsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCw2Q0FBNkM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7Y0FDekIsRUFBQyxJQUFJLEVBQUMsR0FBRyxPQUFPO1FBQ3RCLElBQUcsSUFBSSxFQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzVDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBRztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDh2QkFBcUM7Z0JBRXJDLGFBQWEsRUFBQyxpQkFBaUIsQ0FBQyxJQUFJOzthQUNyQzs7Ozs7c0JBR0UsS0FBSzttQkFDTCxLQUFLO3NCQUNMLE1BQU07d0JBTU4sU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7Ozs7SUFSdkMsaUNBQTBCOztJQUMxQiw4QkFBb0I7O0lBQ3BCLGlDQUE0Qzs7SUFDNUMsMENBQThCOztJQUM5QixvQ0FBVTs7SUFJVixtQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJ3R5cGVzJzsgXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbiBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjpWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuIFxuICBASW5wdXQoKSBjb2x1bW5zOkNvbHVtbltdO1xuICBASW5wdXQoKSByb3dzOmFueVtdO1xuICBAT3V0cHV0KCkgZGJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9W11cbiAgZGF0YVNvdXJjZSBcbiAgICBcbiAgICBcblxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvciwge3N0YXRpYzogdHJ1ZX0pIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcCgoe25hbWV9KSA9PiBuYW1lICAgKVxuICAgIH0sIDIwMCk7XG4gICAgICBcbiAgICBcbiAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHRoaXMucm93cyk7XG4gICAgLy90aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgIGNvbnN0IHtyb3dzfSA9IGNoYW5nZXM7XG4gICAgIGlmKHJvd3Mpe1xuICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pihyb3dzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICB9XG4gIH1cblxuICBnZXRSZWNvcmQocm93KXtcbiAgICAgIHRoaXMuZGJDbGljay5lbWl0KHJvdyk7ICAgXG4gIH1cbn1cbiJdfQ==
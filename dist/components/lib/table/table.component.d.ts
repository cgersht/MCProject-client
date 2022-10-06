import { OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Column } from 'types';
import { MatDialog, MatPaginator } from '@angular/material';
export declare class TableComponent implements OnInit, OnChanges {
    dialog: MatDialog;
    columns: Column[];
    rows: any[];
    dbClick: EventEmitter<any>;
    displayedColumns: string[];
    dataSource: any;
    paginator: MatPaginator;
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getRecord(row: any): void;
}

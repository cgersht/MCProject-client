import { OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Column } from 'types';
import { MatPaginator } from '@angular/material/paginator';
export declare class TableComponent implements OnInit, OnChanges {
    columns: Column[];
    rows: any[];
    tableType: any[];
    dbClick: EventEmitter<any>;
    displayedColumns: string[];
    dataSource: any;
    paginator: MatPaginator;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getRecord(row: any): void;
}

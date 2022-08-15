import { ChangeDetectorRef, NgZone, OnDestroy, OnInit } from '@angular/core';
export declare class ClockAndDateComponent implements OnInit, OnDestroy {
    private zone;
    private cd;
    time: string;
    isDestroy: boolean;
    constructor(zone: NgZone, cd: ChangeDetectorRef);
    ngOnInit(): void;
    setTime(): void;
    formatNum(i: any): any;
    ngOnDestroy(): void;
}

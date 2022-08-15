/**
 * @fileoverview added by tsickle
 * Generated from: lib/clock-and-date/clock-and-date.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
export class ClockAndDateComponent {
    /**
     * @param {?} zone
     * @param {?} cd
     */
    constructor(zone, cd) {
        this.zone = zone;
        this.cd = cd;
        this.time = '00:00';
        this.isDestroy = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cd.detach();
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.setTime()));
    }
    /**
     * @return {?}
     */
    setTime() {
        if (this.isDestroy) {
            return;
        }
        /** @type {?} */
        const now = new Date();
        this.time = `${now.getHours()}:${this.formatNum(now.getMinutes())}`;
        this.cd.detectChanges();
        setTimeout(this.setTime.bind(this), 6000);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    formatNum(i) {
        return i < 10 ? `0${i}` : i;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroy = true;
    }
}
ClockAndDateComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-clock-and-date',
                template: "<p>clock-and-date works!</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ClockAndDateComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stYW5kLWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jbG9jay1hbmQtZGF0ZS9jbG9jay1hbmQtZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFPeEYsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFJaEMsWUFBb0IsSUFBWSxFQUFVLEVBQXFCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUYvRCxTQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUNpRCxDQUFDOzs7O0lBRXBFLFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUFFLE9BQU87U0FBRTs7Y0FDekIsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsMENBQThDOzthQUUvQzs7OztZQU5zQyxNQUFNO1lBQXBDLGlCQUFpQjs7OztJQVN4QixxQ0FBZTs7SUFDZiwwQ0FBa0I7Ozs7O0lBQ04scUNBQW9COzs7OztJQUFFLG1DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNsb2NrLWFuZC1kYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb2NrLWFuZC1kYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2xvY2stYW5kLWRhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDbG9ja0FuZERhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgLE9uRGVzdHJveSB7XG5cbiAgdGltZSA9ICcwMDowMCc7XG4gIGlzRGVzdHJveSA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2QuZGV0YWNoKCk7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuc2V0VGltZSgpKTtcbiAgfVxuXG4gIHNldFRpbWUoKSB7XG4gICAgaWYgKHRoaXMuaXNEZXN0cm95KSB7IHJldHVybjsgfVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy50aW1lID0gYCR7bm93LmdldEhvdXJzKCl9OiR7dGhpcy5mb3JtYXROdW0obm93LmdldE1pbnV0ZXMoKSl9YDtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KHRoaXMuc2V0VGltZS5iaW5kKHRoaXMpLCA2MDAwKTtcbiAgfVxuXG4gIGZvcm1hdE51bShpKSB7XG4gICAgcmV0dXJuIGkgPCAxMCA/IGAwJHtpfWAgOiBpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xuICB9XG5cbn1cblxuXG4iXX0=
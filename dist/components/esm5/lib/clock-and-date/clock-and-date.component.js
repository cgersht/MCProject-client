/**
 * @fileoverview added by tsickle
 * Generated from: lib/clock-and-date/clock-and-date.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'lib-clock-and-date',
                    template: "<p>clock-and-date works!</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ClockAndDateComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    return ClockAndDateComponent;
}());
export { ClockAndDateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stYW5kLWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jbG9jay1hbmQtZGF0ZS9jbG9jay1hbmQtZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFeEY7SUFTRSwrQkFBb0IsSUFBWSxFQUFVLEVBQXFCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUYvRCxTQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUNpRCxDQUFDOzs7O0lBRXBFLHdDQUFROzs7SUFBUjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLEVBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsdUNBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsT0FBTztTQUFFOztZQUN6QixHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBTSxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUcsQ0FBQztRQUNwRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELHlDQUFTOzs7O0lBQVQsVUFBVSxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFJLENBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDBDQUE4Qzs7aUJBRS9DOzs7O2dCQU5zQyxNQUFNO2dCQUFwQyxpQkFBaUI7O0lBa0MxQiw0QkFBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLHFCQUFxQjs7O0lBRWhDLHFDQUFlOztJQUNmLDBDQUFrQjs7Ozs7SUFDTixxQ0FBb0I7Ozs7O0lBQUUsbUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2xvY2stYW5kLWRhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xvY2stYW5kLWRhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jbG9jay1hbmQtZGF0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENsb2NrQW5kRGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAsT25EZXN0cm95IHtcblxuICB0aW1lID0gJzAwOjAwJztcbiAgaXNEZXN0cm95ID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jZC5kZXRhY2goKTtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5zZXRUaW1lKCkpO1xuICB9XG5cbiAgc2V0VGltZSgpIHtcbiAgICBpZiAodGhpcy5pc0Rlc3Ryb3kpIHsgcmV0dXJuOyB9XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnRpbWUgPSBgJHtub3cuZ2V0SG91cnMoKX06JHt0aGlzLmZvcm1hdE51bShub3cuZ2V0TWludXRlcygpKX1gO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHNldFRpbWVvdXQodGhpcy5zZXRUaW1lLmJpbmQodGhpcyksIDYwMDApO1xuICB9XG5cbiAgZm9ybWF0TnVtKGkpIHtcbiAgICByZXR1cm4gaSA8IDEwID8gYDAke2l9YCA6IGk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveSA9IHRydWU7XG4gIH1cblxufVxuXG5cbiJdfQ==
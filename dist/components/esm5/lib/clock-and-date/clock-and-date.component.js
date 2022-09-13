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
                    template: "<p>clock-and-date works!</p>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stYW5kLWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jbG9jay1hbmQtZGF0ZS9jbG9jay1hbmQtZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFeEY7SUFTRSwrQkFBb0IsSUFBWSxFQUFVLEVBQXFCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUYvRCxTQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUNpRCxDQUFDOzs7O0lBRXBFLHdDQUFROzs7SUFBUjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLEVBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsdUNBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsT0FBTztTQUFFOztZQUN6QixHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBTSxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUcsQ0FBQztRQUNwRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELHlDQUFTOzs7O0lBQVQsVUFBVSxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFJLENBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDRDQUE4Qzs7aUJBRS9DOzs7O2dCQU5zQyxNQUFNO2dCQUFwQyxpQkFBaUI7O0lBa0MxQiw0QkFBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLHFCQUFxQjs7O0lBRWhDLHFDQUFlOztJQUNmLDBDQUFrQjs7Ozs7SUFDTixxQ0FBb0I7Ozs7O0lBQUUsbUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY2xvY2stYW5kLWRhdGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9jay1hbmQtZGF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2xvY2stYW5kLWRhdGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xvY2tBbmREYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICxPbkRlc3Ryb3kge1xyXG5cclxuICB0aW1lID0gJzAwOjAwJztcclxuICBpc0Rlc3Ryb3kgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2QuZGV0YWNoKCk7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5zZXRUaW1lKCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0VGltZSgpIHtcclxuICAgIGlmICh0aGlzLmlzRGVzdHJveSkgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLnRpbWUgPSBgJHtub3cuZ2V0SG91cnMoKX06JHt0aGlzLmZvcm1hdE51bShub3cuZ2V0TWludXRlcygpKX1gO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KHRoaXMuc2V0VGltZS5iaW5kKHRoaXMpLCA2MDAwKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdE51bShpKSB7XHJcbiAgICByZXR1cm4gaSA8IDEwID8gYDAke2l9YCA6IGk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19
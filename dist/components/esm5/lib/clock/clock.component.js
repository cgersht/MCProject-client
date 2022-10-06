/**
 * @fileoverview added by tsickle
 * Generated from: lib/clock/clock.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
var ClockComponent = /** @class */ (function () {
    function ClockComponent(zone, cd) {
        this.zone = zone;
        this.cd = cd;
        this.time = '00:00';
        this.isDestroy = false;
    }
    /**
     * @return {?}
     */
    ClockComponent.prototype.ngOnInit = /**
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
    ClockComponent.prototype.setTime = /**
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
    ClockComponent.prototype.formatNum = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return i < 10 ? "0" + i : i;
    };
    /**
     * @return {?}
     */
    ClockComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroy = true;
    };
    ClockComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-clock',
                    template: "<span [innerText]=\"'time'\"></span>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ClockComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    return ClockComponent;
}());
export { ClockComponent };
if (false) {
    /** @type {?} */
    ClockComponent.prototype.time;
    /** @type {?} */
    ClockComponent.prototype.isDestroy;
    /**
     * @type {?}
     * @private
     */
    ClockComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    ClockComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jbG9jay9jbG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFeEY7SUFRRSx3QkFBb0IsSUFBWSxFQUFVLEVBQXFCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUYvRCxTQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUNpRCxDQUFDOzs7O0lBRXBFLGlDQUFROzs7SUFBUjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLEVBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsZ0NBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsT0FBTztTQUFFOztZQUN6QixHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBTSxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUcsQ0FBQztRQUNwRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFJLENBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixvREFBcUM7O2lCQUV0Qzs7OztnQkFOc0MsTUFBTTtnQkFBcEMsaUJBQWlCOztJQWlDMUIscUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTFCWSxjQUFjOzs7SUFDekIsOEJBQWU7O0lBQ2YsbUNBQWtCOzs7OztJQUNOLDhCQUFvQjs7Ozs7SUFBRSw0QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jbG9jaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb2NrLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbG9jay5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxPbkRlc3Ryb3kge1xyXG4gIHRpbWUgPSAnMDA6MDAnO1xyXG4gIGlzRGVzdHJveSA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jZC5kZXRhY2goKTtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLnNldFRpbWUoKSk7XHJcbiAgfVxyXG5cclxuICBzZXRUaW1lKCkge1xyXG4gICAgaWYgKHRoaXMuaXNEZXN0cm95KSB7IHJldHVybjsgfVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMudGltZSA9IGAke25vdy5nZXRIb3VycygpfToke3RoaXMuZm9ybWF0TnVtKG5vdy5nZXRNaW51dGVzKCkpfWA7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHNldFRpbWVvdXQodGhpcy5zZXRUaW1lLmJpbmQodGhpcyksIDYwMDApO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TnVtKGkpIHtcclxuICAgIHJldHVybiBpIDwgMTAgPyBgMCR7aX1gIDogaTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=
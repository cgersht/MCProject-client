/**
 * @fileoverview added by tsickle
 * Generated from: lib/clock/clock.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
export class ClockComponent {
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
ClockComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-clock',
                template: "<span [innerText]=\"'time'\"></span>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ClockComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jbG9jay9jbG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFPeEYsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBR3pCLFlBQW9CLElBQVksRUFBVSxFQUFxQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFGL0QsU0FBSSxHQUFHLE9BQU8sQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFDaUQsQ0FBQzs7OztJQUVwRSxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxPQUFPO1NBQUU7O2NBQ3pCLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixvREFBcUM7O2FBRXRDOzs7O1lBTnNDLE1BQU07WUFBcEMsaUJBQWlCOzs7O0lBUXhCLDhCQUFlOztJQUNmLG1DQUFrQjs7Ozs7SUFDTiw4QkFBb0I7Ozs7O0lBQUUsNEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY2xvY2snLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9jay5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2xvY2suY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsT25EZXN0cm95IHtcclxuICB0aW1lID0gJzAwOjAwJztcclxuICBpc0Rlc3Ryb3kgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2QuZGV0YWNoKCk7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5zZXRUaW1lKCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0VGltZSgpIHtcclxuICAgIGlmICh0aGlzLmlzRGVzdHJveSkgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLnRpbWUgPSBgJHtub3cuZ2V0SG91cnMoKX06JHt0aGlzLmZvcm1hdE51bShub3cuZ2V0TWludXRlcygpKX1gO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KHRoaXMuc2V0VGltZS5iaW5kKHRoaXMpLCA2MDAwKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdE51bShpKSB7XHJcbiAgICByZXR1cm4gaSA8IDEwID8gYDAke2l9YCA6IGk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19
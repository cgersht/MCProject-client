import { ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
// import { ClockPickerConfig, ClockPickerDialogService } from 'ng-clock-picker-lib';

@Component({
  selector: 'app-date-and-clock',
  templateUrl: './date-and-clock.component.html',
  styleUrls: ['./date-and-clock.component.scss']
})
export class DateAndClockComponent implements OnInit, OnDestroy {
  time = '00:00';
  date='01/01/2000';
  isDestroy = false;
  constructor(private zone: NgZone, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.cd.detach();
    this.zone.runOutsideAngular(() => this.setTime());
  }

  setTime() {
    if (this.isDestroy) { return; }
    const now = new Date();
    this.time = `${this.formatNum(now.getHours())}:${this.formatNum(now.getMinutes())}:${this.formatNum(now.getSeconds())}`;
    this.date=`${this.formatNum(now.getDate())}/${this.formatNum(now.getMonth()+1)}/${this.formatNum(now.getFullYear())}`;
    // this.date=this.formatNum(now.getDay())
    this.cd.detectChanges();
    setTimeout(this.setTime.bind(this), 1000);
  }

  formatNum(i) {
    return i < 10 ? `0${i}` : i;
  }

  ngOnDestroy(): void {
    this.isDestroy = true;
  }

}


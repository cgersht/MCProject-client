import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'lib-clock-and-date',
  templateUrl: './clock-and-date.component.html',
  styleUrls: ['./clock-and-date.component.scss']
})
export class ClockAndDateComponent implements OnInit ,OnDestroy {

  time = '00:00';
  isDestroy = false;
  constructor(private zone: NgZone, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.cd.detach();
    this.zone.runOutsideAngular(() => this.setTime());
  }

  setTime() {
    if (this.isDestroy) { return; }
    const now = new Date();
    this.time = `${now.getHours()}:${this.formatNum(now.getMinutes())}`;
    this.cd.detectChanges();
    setTimeout(this.setTime.bind(this), 6000);
  }

  formatNum(i) {
    return i < 10 ? `0${i}` : i;
  }

  ngOnDestroy(): void {
    this.isDestroy = true;
  }

}



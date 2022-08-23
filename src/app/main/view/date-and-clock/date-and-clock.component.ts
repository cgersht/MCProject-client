import { ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
// import { ClockPickerConfig, ClockPickerDialogService } from 'ng-clock-picker-lib';

@Component({
  selector: 'app-date-and-clock',
  templateUrl: './date-and-clock.component.html',
  styleUrls: ['./date-and-clock.component.scss']
})
export class DateAndClockComponent implements OnInit, OnDestroy {
   

  // date='01/01/2000'
  // time = '00:00';
  isDestroy = false;

  // // config: ClockPickerConfig = { 
  // //   wrapperClassName: 'className', 
  // //   closeOnOverlayClick: true 
  // // };

  constructor(
    private renderer:Renderer2,
  //   private zone: NgZone, 
  //   private cd: ChangeDetectorRef,
  //   // private vcr: ViewContainerRef, 
  //   // private clockPickerDialogService: ClockPickerDialogService
    ) { }

  ngOnInit() {
    this.initClock();
    
  //   this.cd.detach();
  //   this.zone.runOutsideAngular(() => this.setTime());
  //   // this.clockPickerDialogService.registerViewContainerRef(this.vcr);
  }


 

  // setTime() {
  //   if (this.isDestroy) { return; }
  //   const now = new Date();
  //   this.time = `${this.formatNum(now.getHours())}:${this.formatNum(now.getMinutes())}:${this.formatNum(now.getSeconds())}`;
  //   this.date = `${this.formatNum(now.getDay())}.${this.formatNum(now.getMonth()+1)}.${now.getFullYear()}`;
  //   this.cd.detectChanges();
  //   setTimeout(this.setTime.bind(this), 1000);
  // }

  // formatNum(i) {
  //   return i < 10 ? `0${i}` : i;
  // }

  ngOnDestroy(): void {
    this.isDestroy = true;
  }
  
  initClock(){


    
 const deg = 6;
 const hr = document.querySelector('#hr');
 const mn = document.querySelector('#mn');
 const sc = document.querySelector('#sc');
 
 setInterval(() =>{
     
      let day = new Date();
 let hh = day.getHours() * 30;
 let mm = day.getMinutes() * deg;
 let ss = day.getSeconds() * deg;
 
//  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
//  mn.style.transform = `rotateZ(${mm}deg)`;
//  sc.style.transform = `rotateZ(${ss}deg)`;
     
 })
  //   var hands = [];
  //   hands.push(document.querySelector('#secondhand > *'));
  //   hands.push(document.querySelector('#minutehand > *'));
  //   hands.push(document.querySelector('#hourhand > *'));
    
  //   var cx = 100;
  //   var cy = 100;
  //   var date = new Date();
  //   var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
  //   var minuteAngle = 360 * date.getMinutes() / 60;
  //   var secAngle = 360 * date.getSeconds() / 60;

  //   hands[0].setAttribute('from', this.shifter(secAngle,cx,cy));
  //   hands[0].setAttribute('to', this.shifter(secAngle + 360,cx,cy));
  //   hands[1].setAttribute('from', this.shifter(minuteAngle,cx,cy));
  //   hands[1].setAttribute('to', this.shifter(minuteAngle + 360,cx,cy));
  //   hands[2].setAttribute('from', this.shifter(hoursAngle,cx,cy));
  //   hands[2].setAttribute('to', this.shifter(hoursAngle + 360,cx,cy));

  //   for(var i = 1; i <= 12; i++) {
  //     var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  //     el.setAttribute('x1', '100');
  //     el.setAttribute('y1', '30');
  //     el.setAttribute('x2', '100');
  //     el.setAttribute('y2', '40');
  //     el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
  //     el.setAttribute('style', 'stroke: #ffffff;');


  //     document.querySelector('svg').appendChild(el);    }
  // }

  //   shifter(val,cx,cy) {
  //     return [val, cx, cy].join(' ');
  //   }
  // showModal(): void {
  //   this.clockPickerDialogService.showClockPickerDialog(this.config).subscribe((time: string) => console.log(time))
  // }


}

// export interface ClockPickerConfig {
//   wrapperClassName?: string;
//   buttonCancel?: string;
//   buttonConfirm?: string;
//   closeOnOverlayClick?: boolean;
//   initialValue?: string;
//   is24?: boolean; 
// }





  // 
  
  

}

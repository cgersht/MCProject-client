import { Component, OnInit, Input, ViewChild, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Column } from 'types'; 
import { MatDialog, MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { PaymentComponent } from 'src/app/main/view/payment/payment.component';
import { PaymentModule } from 'src/app/main/view/payment/payment.module';
 

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnChanges {
 
  @Input() columns:Column[];
  @Input() rows:any[];
  // @Input() tableType:tableTypeEnum;
  @Output() dbClick = new EventEmitter<any>();
  displayedColumns: string[] =[]
  dataSource 
    
    

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.displayedColumns = this.columns.map(({name}) => name   )
    }, 200);
      
    
     this.dataSource = new MatTableDataSource<any>(this.rows);
    //this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
     const {rows} = changes;
     if(rows){
       this.dataSource = new MatTableDataSource<any>(rows.currentValue);
       this.dataSource.paginator = this.paginator;
     }
  }

  getRecord(row){
      this.dbClick.emit(row);   
  }

  nnn(){
    // switch(this.tableType){
      // case tableTypeEnum.Project:
    console.log("trdfghjkhj");

    }
    // openDialog() {
    //   const dialogRef = this.dialog.open(PaymentComponent);
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log(`Dialog result: ${result}`);
    //   });
    // }

}

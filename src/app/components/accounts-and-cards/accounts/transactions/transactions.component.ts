import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  displayedColumns = ["Date", "Hour", "Account", "OtherSide", "Reason", "Currency", "Value"]
  dataSource = new MatTableDataSource<any> ()  
  allData
  private _grid
  notification : boolean = true

  @ViewChild(MatSort) sort: MatSort
  @Input('grid') grid;
  // @Input() 
  // set grid(value: boolean) {
  //   this._grid = value;
  // }
  // get grid(): boolean {
  //   return this._grid;
  // }

  constructor(private dataService : DataService) {  }

  ngOnInit() {
    this.dataService.getTransactions().subscribe(data => {
      // console.log(data as string[]);
      this.allData = data;
      this.dataSource.data = this.allData
      
    })
      if(this.grid) {
        this.displayedColumns = ["Date", "Hour", "Account", "OtherSide", "Reason", "Currency", "Value"]

      } else if(this.grid === undefined) {
        this.displayedColumns = ["OtherSide", "Currency", "Value"]
      }
  }

}

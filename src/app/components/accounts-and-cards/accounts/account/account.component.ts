import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input('account') account;
  @Input('grid') grid;
  canEditHeader: boolean
  
  constructor() { }

  ngOnInit() { }

  toggleEdit() {
    this.canEditHeader = !this.canEditHeader
  }
}

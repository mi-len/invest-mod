import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input('grid') grid
  notification: boolean = true
  constructor() { }

  closeNotif() {
    this.notification = false;
  }
  ngOnInit() {
  }

}

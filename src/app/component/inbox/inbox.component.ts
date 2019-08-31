import { Component, OnInit } from '@angular/core';
import { InboxService } from './services/inbox.service';
import { InboxModel } from './models/inbox.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  inboxData: InboxModel;

  isCollapse: boolean = true;

  constructor(private inboxService: InboxService, private router: Router) { }

  ngOnInit() {

    this.inboxData = new InboxModel();

    this.inboxData.clear(); //init data

    this.getData();
  }

  getData() {
    this.inboxService.getAllInboxData().subscribe(res => {
      this.inboxData = res;
    })
  }

  setCollapse() {
    this.isCollapse = !this.isCollapse;
  }

}

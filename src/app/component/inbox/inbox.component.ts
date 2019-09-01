import { Component, OnInit } from '@angular/core';
import { InboxService } from './services/inbox.service';
import { InboxModel } from './models/inbox.model';
import { MatDialog } from '@angular/material';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  inboxData: InboxModel[] = [];

  isCollapse: boolean = true;

  constructor(private inboxService: InboxService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.inboxService.getAllInboxData().subscribe((res : any) => {
      for(let i = 0; i < res.length; i++){
        this.inboxData.push(res[i])
      }
    })
  }

  setCollapse() {
    this.isCollapse = !this.isCollapse;
  }

  viewInfo(inboxData) {

    const dialogRef = this.dialog.open(InfoComponent, {
      width: '80%',
      data: inboxData
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

}

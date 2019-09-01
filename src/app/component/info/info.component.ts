import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InboxModel } from '../inbox/models/inbox.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  inboxData : InboxModel;

  constructor(public dialogRef: MatDialogRef<InfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InboxModel) { }

  ngOnInit() {
    this.inboxData = new InboxModel();
    this.inboxData.clear();
    this.inboxData = this.data;
  }

  closeDialog(): void {
    this.dialogRef.close(true);
  }

}

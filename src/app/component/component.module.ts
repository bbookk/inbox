import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { ComponentRoutingModule } from './component-routing.module';
import { InboxService } from './inbox/services/inbox.service';
import {MatCardModule, MatButtonModule, MatIconModule, MatDialogModule ,MatDividerModule} from '@angular/material';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule
  ],
  declarations: [InboxComponent, InfoComponent],
  providers: [InboxService]
})
export class ComponentModule { }
